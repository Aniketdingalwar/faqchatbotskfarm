import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./ChatMessage";
import { QuickReplies } from "./QuickReplies";
import { LeadForm } from "./LeadForm";
import { welcomeMessage, findBestMatch } from "@/data/faqData";
import { MessageCircle, Send, X, Minimize2, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message
      setMessages([
        {
          id: "welcome",
          text: welcomeMessage.text,
          isBot: true,
          quickReplies: welcomeMessage.quickReplies
        }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom on new messages
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Check for lead form triggers
    const lowerText = text.toLowerCase();
    const isLeadRequest = 
      lowerText.includes("callback") ||
      lowerText.includes("contact") ||
      lowerText.includes("call me") ||
      lowerText.includes("my details") ||
      lowerText.includes("quote") ||
      lowerText.includes("request");

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 600));

    if (isLeadRequest) {
      setIsTyping(false);
      setShowLeadForm(true);
      
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: "Great! Please fill in your details below, and our expert team will reach out to you shortly. 📞",
        isBot: true
      };
      setMessages(prev => [...prev, botMessage]);
    } else {
      const faq = findBestMatch(text);
      
      setIsTyping(false);
      
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: faq.answer,
        isBot: true,
        quickReplies: faq.followUp
      };
      
      setMessages(prev => [...prev, botMessage]);
    }
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleLeadSubmit = (data) => {
    console.log("Lead submitted:", data);
    
    const thankYouMessage = {
      id: Date.now().toString(),
      text: `Thank you, ${data.name}! 🙏\n\nWe've received your request. Our agricultural expert will call you at ${data.phone} within 24 hours.\n\nIn the meantime, is there anything else you'd like to know about our services?`,
      isBot: true,
      quickReplies: ["Explore drone services", "Learn about training", "View pricing"]
    };
    
    setMessages(prev => [...prev, thankYouMessage]);
    setShowLeadForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "w-14 h-14 rounded-full shadow-chat",
          "bg-gradient-chat hover:opacity-90",
          "animate-bounce-gentle"
        )}
        size="icon"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </Button>
    );
  }

  return (
    <Card
      className={cn(
        "fixed z-50 shadow-chat border-primary/10",
        "transition-all duration-300 ease-out",
        isMinimized 
          ? "bottom-6 right-6 w-72 h-14"
          : "bottom-6 right-6 w-[380px] h-[600px] max-h-[80vh]",
        "flex flex-col overflow-hidden bg-background"
      )}
    >
      {/* Header */}
      <div className="bg-gradient-chat p-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-primary-foreground font-heading text-sm">
              SK Natural Farm
            </h3>
            <p className="text-xs text-primary-foreground/80">Smart Farming Assistant</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="space-y-3">
                  <ChatMessage
                    message={message.text}
                    isBot={message.isBot}
                  />
                  {message.isBot && message.quickReplies && (
                    <div className="ml-12">
                      <QuickReplies
                        replies={message.quickReplies}
                        onSelect={handleQuickReply}
                        disabled={isTyping}
                      />
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <ChatMessage message="" isBot isTyping />
              )}

              {showLeadForm && (
                <div className="ml-12">
                  <LeadForm
                    onClose={() => setShowLeadForm(false)}
                    onSubmit={handleLeadSubmit}
                  />
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-border bg-card flex-shrink-0"
          >
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-background border-input"
                disabled={isTyping}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-chat hover:opacity-90 text-primary-foreground"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </>
      )}
    </Card>
  );
}

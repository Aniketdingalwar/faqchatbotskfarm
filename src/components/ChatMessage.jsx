import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Leaf, User } from "lucide-react";

export const ChatMessage = forwardRef(
  ({ message, isBot, isTyping }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex gap-3 animate-slide-up",
          isBot ? "justify-start" : "justify-end"
        )}
      >
        {isBot && (
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-chat flex items-center justify-center shadow-soft">
            <Leaf className="w-5 h-5 text-primary-foreground" />
          </div>
        )}
        
        <div
          className={cn(
            "max-w-[80%] rounded-2xl px-4 py-3 shadow-soft",
            isBot
              ? "bg-card border border-border rounded-tl-md"
              : "bg-gradient-chat text-primary-foreground rounded-tr-md"
          )}
        >
          {isTyping ? (
            <div className="flex gap-1 py-2 px-1">
              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-typing" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-typing" style={{ animationDelay: "200ms" }} />
              <span className="w-2 h-2 rounded-full bg-muted-foreground animate-typing" style={{ animationDelay: "400ms" }} />
            </div>
          ) : (
            <div className={cn(
              "text-sm leading-relaxed whitespace-pre-line font-body",
              isBot ? "text-foreground" : "text-primary-foreground"
            )}>
              {message.split('\n').map((line, i) => {
                // Handle bold text
                const parts = line.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <span key={i}>
                    {parts.map((part, j) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={j} className="font-semibold">{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    })}
                    {i < message.split('\n').length - 1 && <br />}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        
        {!isBot && (
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-user flex items-center justify-center shadow-soft">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
        )}
      </div>
    );
  }
);

ChatMessage.displayName = "ChatMessage";

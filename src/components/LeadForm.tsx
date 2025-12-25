import { forwardRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { X, Send, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

interface LeadFormProps {
  onClose: () => void;
  onSubmit: (data: LeadData) => void;
}

export interface LeadData {
  name: string;
  phone: string;
  location: string;
  farmSize?: string;
  message?: string;
}

export const LeadForm = forwardRef<HTMLDivElement, LeadFormProps>(
  ({ onClose, onSubmit }, ref) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<LeadData>({
      name: "",
      phone: "",
      location: "",
      farmSize: "",
      message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!formData.name || !formData.phone || !formData.location) {
        toast({
          title: "Please fill required fields",
          description: "Name, phone, and location are required.",
          variant: "destructive"
        });
        return;
      }

      setIsSubmitting(true);
      
      try {
        const templateParams = {
          from_name: formData.name,
          phone: formData.phone,
          location: formData.location,
          farm_size: formData.farmSize || "Not specified",
          message: formData.message || "No additional message",
        };

        const response = await emailjs.send(
          "service_5to8i18",
          "template_p2iqhfl",
          templateParams,
          "yhV9Wv8X9OH14Bbey"
        );

        console.log("Email sent successfully:", response);
        onSubmit(formData);
        
        toast({
          title: "Request submitted! 🌱",
          description: "Our team will contact you within 24 hours."
        });
        
        onClose();
      } catch (error) {
        console.error("Error sending email:", error);
        toast({
          title: "Submission failed",
          description: "Please try again or contact us directly.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <Card ref={ref} className="p-4 animate-slide-up border-primary/20 shadow-chat bg-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground font-heading">Request a Callback</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 rounded-full hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-sm text-muted-foreground">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-background border-input"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone" className="text-sm text-muted-foreground">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-background border-input"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="location" className="text-sm text-muted-foreground">
              Location / District <span className="text-destructive">*</span>
            </Label>
            <Input
              id="location"
              placeholder="Your village / district"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="bg-background border-input"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="farmSize" className="text-sm text-muted-foreground">
              Farm Size (acres)
            </Label>
            <Input
              id="farmSize"
              placeholder="e.g., 5 acres"
              value={formData.farmSize}
              onChange={(e) => setFormData({ ...formData, farmSize: e.target.value })}
              className="bg-background border-input"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-sm text-muted-foreground">
              How can we help?
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your farming needs..."
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-input resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-chat hover:opacity-90 text-primary-foreground"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Request Callback
              </>
            )}
          </Button>
        </form>
      </Card>
    );
  }
);

LeadForm.displayName = "LeadForm";

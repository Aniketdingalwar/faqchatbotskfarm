import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function QuickReplies({ replies, onSelect, disabled }) {
  if (!replies.length) return null;

  return (
    <div className="flex flex-wrap gap-2 animate-fade-in">
      {replies.map((reply, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          disabled={disabled}
          onClick={() => onSelect(reply)}
          className={cn(
            "text-xs font-medium rounded-full border-primary/30 text-primary",
            "hover:bg-primary hover:text-primary-foreground hover:border-primary",
            "transition-all duration-200 shadow-sm",
            "disabled:opacity-50"
          )}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          {reply}
        </Button>
      ))}
    </div>
  );
}

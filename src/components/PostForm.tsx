import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface PostFormProps {
  onSubmit: (content: string) => void;
}

export function PostForm({ onSubmit }: PostFormProps) {
  const [content, setContent] = useState("");
  const { toast } = useToast();
  const maxLength = 280;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim().length === 0) {
      toast({
        title: "Error",
        description: "Post cannot be empty",
        variant: "destructive",
      });
      return;
    }
    onSubmit(content);
    setContent("");
    toast({
      title: "Success",
      description: "Post created anonymously!",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Textarea
          placeholder="Share your thoughts anonymously..."
          value={content}
          onChange={(e) => setContent(e.target.value.slice(0, maxLength))}
          className="min-h-[100px] bg-card text-foreground resize-none"
        />
        <span className="absolute bottom-2 right-2 text-sm text-muted-foreground">
          {content.length}/{maxLength}
        </span>
      </div>
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-white"
      >
        Post Anonymously
      </Button>
    </form>
  );
}
import { useState } from "react";
import { Heart } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

interface PostProps {
  content: string;
  timestamp: Date;
  likes: number;
  id: string;
}

export function Post({ content, timestamp, likes: initialLikes, id }: PostProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setHasLiked(!hasLiked);
  };

  return (
    <div className="bg-card rounded-lg p-4 shadow-lg animate-fade-in">
      <p className="text-foreground text-lg mb-4">{content}</p>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{formatDistanceToNow(timestamp, { addSuffix: true })}</span>
        <button
          onClick={handleLike}
          className="flex items-center gap-1 hover:text-primary transition-colors"
        >
          <Heart
            className={cn("w-5 h-5", hasLiked && "fill-primary text-primary")}
          />
          <span>{likes}</span>
        </button>
      </div>
    </div>
  );
}
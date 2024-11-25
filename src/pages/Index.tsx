import { useState } from "react";
import { Post } from "@/components/Post";
import { PostForm } from "@/components/PostForm";

interface PostData {
  id: string;
  content: string;
  timestamp: Date;
  likes: number;
}

const Index = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const handleNewPost = (content: string) => {
    const newPost: PostData = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      likes: 0,
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-2xl py-8 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Anonymous Posts</h1>
        <PostForm onSubmit={handleNewPost} />
        <div className="space-y-4">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
          {posts.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No posts yet. Be the first to share your thoughts!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
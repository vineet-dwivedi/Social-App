import { createContext, useState } from "react";
import { getFeed } from "./services/post.api";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [feed, setFeed] = useState(null);

  
  return (
    <PostContext.Provider
      value={{
        post,
        setPost,
        feed,
        setFeed,
        loading,
        setLoading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
import { createContext, useState, useContext } from "react";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "React Context API haqida to'liq qo'llanma",
      category: "Frontend",
      date: "2026-07-15",
      status: "Published",
    },
    {
      id: 2,
      title: "Vite nima va u nima uchun tez ishlaydi?",
      category: "Tools",
      date: "2026-07-16",
      status: "Draft",
    },
  ]);
  const [loading, setLoading] = useState(false);

  // Post qo'shish
  const addPost = (newPost) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      { ...newPost, id: Date.now(), date: new Date().toISOString().split('T')[0] }
    ]);
  };

  // Postni o'chirish
  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, loading, deletePost, addPost }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostContext);
}

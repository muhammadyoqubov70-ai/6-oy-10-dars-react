import { createContext, useContext, useEffect, useState } from "react";

const PostContext = createContext(null);

const CATEGORIES = ["Technology", "Design", "Productivity", "Lifestyle"];
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
];

function getFallbackImage(id) {
  return `${FALLBACK_IMAGES[id % FALLBACK_IMAGES.length]}?auto=format&fit=crop&w=600&q=80`;
}

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=12",
        );
        const data = await res.json();
        const mapped = data.map((item) => ({
          id: item.id,
          title: item.title.charAt(0).toUpperCase() + item.title.slice(1),
          description: item.body.slice(0, 100) + "...",
          content: item.body,
          category: CATEGORIES[item.id % CATEGORIES.length],
          status: item.id % 4 === 0 ? "Draft" : "Published",
          date: new Date(2025, 10, 20 - item.id).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          image: getFallbackImage(item.id),
        }));
        setPosts(mapped);
      } catch (err) {
        console.error("Postlarni yuklashda xatolik:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const addPost = (newPost) => {
    const post = {
      id: Date.now(),
      status: "Draft",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      image: getFallbackImage(Date.now()),
      ...newPost,
    };
    setPosts((prev) => [post, ...prev]);
  };

  const updatePost = (id, updatedFields) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === Number(id) ? { ...p, ...updatedFields } : p)),
    );
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== Number(id)));
  };

  const getPostById = (id) => posts.find((p) => p.id === Number(id));

  return (
    <PostContext.Provider
      value={{ posts, loading, addPost, updatePost, deletePost, getPostById }}
    >
      {children}
    </PostContext.Provider>
  );
}

export const usePosts = () => useContext(PostContext);

import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";

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

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

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
          date: new Date(2025, 10, 20 - item.id).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          image: getFallbackImage(item.id),
        }));
        setPosts(mapped);
      } catch (err) {
        setErrorMsg("Postlarni yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="posts-page center">
      <h1>Explore Our Posts</h1>
      <p>
        Discover amazing content from talented writers across various topics
      </p>

      {loading && <p>Yuklanmoqda...</p>}
      {errorMsg && <p style={{ color: "#e53e3e" }}>{errorMsg}</p>}

      {!loading && !errorMsg && (
        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;

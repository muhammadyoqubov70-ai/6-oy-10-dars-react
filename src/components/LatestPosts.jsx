import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
];

function getFallbackImage(id) {
  return `${FALLBACK_IMAGES[id % FALLBACK_IMAGES.length]}?auto=format&fit=crop&w=600&q=80`;
}

function LatestPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=3",
        );
        const data = await res.json();
        const mapped = data.map((item) => ({
          id: item.id,
          title: item.title.charAt(0).toUpperCase() + item.title.slice(1),
          description: item.body.slice(0, 100) + "...",
          date: new Date(2025, 10, 20 - item.id).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          image: getFallbackImage(item.id),
        }));
        setPosts(mapped);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section className="center">
      <div className="start-text">
        <div className="start-text-left">
          <h1>Latest Posts</h1>
          <p>Read the newest and most interesting articles</p>
        </div>
        <Link to="/posts" className="btn btn-secondary">
          View All
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="latest-posts">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

export default LatestPosts;

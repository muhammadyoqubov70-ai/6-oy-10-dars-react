// src/pages/PostDetail.jsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import PostCard from "../components/PostCard";
import "./PostDetail.css";

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
];

function getFallbackImage(id) {
  return `${FALLBACK_IMAGES[id % FALLBACK_IMAGES.length]}?auto=format&fit=crop&w=1200&q=80`;
}

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      setErrorMsg(null);
      try {
        const res = await api.get(`/articles/${id}/`);
        setPost(res.data);

        // O'xshash postlar - shu kategoriyadagilardan 2 tasi
        const allRes = await api.get("/articles/");
        const all = allRes.data.results || allRes.data;
        const others = all.filter((p) => p.id !== Number(id)).slice(0, 2);
        setRelated(others);
      } catch (err) {
        setErrorMsg("Post topilmadi yoki yuklashda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (loading) return <p className="post-detail__status">Yuklanmoqda...</p>;
  if (errorMsg)
    return (
      <p className="post-detail__status post-detail__status--error">
        {errorMsg}
      </p>
    );
  if (!post) return null;

  const image = post.image || getFallbackImage(post.id);

  return (
    <div className="post-detail">
      <Link to="/posts" className="post-detail__back">
        ← Back to Posts
      </Link>

      {post.category && (
        <span className="post-detail__badge">{post.category}</span>
      )}

      <h1 className="post-detail__title">{post.title}</h1>

      <div className="post-detail__meta">
        <span>👤 {post.author || "Noma'lum muallif"}</span>
        <span>
          📅 {new Date(post.created_at || Date.now()).toLocaleDateString()}
        </span>
      </div>

      <img src={image} alt={post.title} className="post-detail__image" />

      <div className="post-detail__content">
        {(post.content || "")
          .split("\n")
          .map((paragraph, i) =>
            paragraph.trim() ? <p key={i}>{paragraph}</p> : null,
          )}
      </div>

      {related.length > 0 && (
        <div className="post-detail__related">
          <h2>Related Posts</h2>
          <div className="post-detail__related-grid">
            {related.map((r) => (
              <PostCard key={r.id} post={r} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

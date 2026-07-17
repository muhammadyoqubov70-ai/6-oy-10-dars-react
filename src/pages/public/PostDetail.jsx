import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./PostDetail.css";

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
];

const SECTION_TITLES = [
  "Overview",
  "Key Concepts",
  "Best Practices",
  "Common Challenges",
  "Looking Ahead",
];

function getFallbackImage(id) {
  return `${FALLBACK_IMAGES[id % FALLBACK_IMAGES.length]}?auto=format&fit=crop&w=1200&q=80`;
}

// Qisqa API matnini bir nechta sarlavhali bo'limga bo'lib, kengaytiradi
function buildSections(baseText, extraTexts) {
  const allText = [baseText, ...extraTexts].join(" ");
  const sentences = allText
    .split(".")
    .map((s) => s.trim())
    .filter(Boolean);

  const sections = [];
  const chunkSize = Math.ceil(sentences.length / SECTION_TITLES.length) || 1;

  for (let i = 0; i < SECTION_TITLES.length; i++) {
    const chunk = sentences.slice(i * chunkSize, (i + 1) * chunkSize);
    if (chunk.length === 0) continue;
    const paragraph =
      chunk.join(". ").replace(/^\w/, (c) => c.toUpperCase()) + ".";
    sections.push({ title: SECTION_TITLES[i], text: paragraph });
  }
  return sections;
}

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      setErrorMsg(null);
      try {
        const [postRes, commentsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
        ]);
        if (!postRes.ok) throw new Error("not found");

        const data = await postRes.json();
        const comments = await commentsRes.json();

        setPost({
          id: data.id,
          title: data.title.charAt(0).toUpperCase() + data.title.slice(1),
          author: `User ${data.userId}`,
        });

        // Komментariylar matnidan qo'shimcha "mazmun" sifatida foydalanamiz
        const extraTexts = comments.slice(0, 4).map((c) => c.body);
        setSections(buildSections(data.body, extraTexts));
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

  const image = getFallbackImage(post.id);

  return (
    <div className="post-detail">
      <Link to="/posts" className="post-detail__back">
        ← Back to Posts
      </Link>

      <h1 className="post-detail__title">{post.title}</h1>

      <div className="post-detail__meta">
        <span>👤 {post.author}</span>
      </div>

      <img src={image} alt={post.title} className="post-detail__image" />

      <div className="post-detail__content">
        {sections.map((section, i) => (
          <div key={i} className="post-detail__section">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

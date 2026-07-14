import { useParams, Link } from "react-router-dom";
import { posts } from "./LatesPost";

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="post-detail-notfound">
        <h2>Post topilmadi</h2>
        <Link to="/blog">Barcha postlarga qaytish</Link>
      </div>
    );
  }

  return (
    <article className="post-detail">
      <Link to="/blog" className="post-detail-back">
        ← Orqaga
      </Link>
      <span className="post-card-category">{post.category}</span>
      <h1>{post.title}</h1>
      <span className="post-card-author">{post.author}</span>
      <img src={post.image} alt={post.title} />
      <p>{post.content}</p>
    </article>
  );
}

export default PostDetail;

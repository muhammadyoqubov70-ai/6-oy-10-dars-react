import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="post-card">
      <div
        className="post-card-image"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <span className="post-card-badge">{post.category}</span>
      </div>
      <div className="post-card-body">
        <span className="post-card-date">📅 {post.date}</span>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span className="post-card-readmore">Read more →</span>
      </div>
    </Link>
  );
}

export default PostCard;

import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="post-card">
      <img src={post.image} alt={post.title} />
      <div className="post-card-body">
        <span className="post-card-category">{post.category}</span>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span className="post-card-author">{post.author}</span>
      </div>
    </Link>
  );
}

export default PostCard;

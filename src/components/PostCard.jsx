import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import RightArrow from "./RightArrow";

function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      <div className="post-card-img-wrap">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-card-body">
        <div className="post-card-date">
          <FaCalendarAlt />
          <span>{post.date}</span>
        </div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <Button text="Read More" variant="danger" RightArrow={RightArrow} />
      </div>
    </Link>
  );
}

export default PostCard;

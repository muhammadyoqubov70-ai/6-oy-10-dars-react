import posts from "../../data/Card";
import PostCard from "../../components/PostCard";

function Posts() {
  return (
    <div className="posts-page center">
      <h1>Explore Our Posts</h1>
      <p>Discover amazing content from talented writers across various topics</p>

      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;

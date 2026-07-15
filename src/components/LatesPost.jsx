import posts from "../data/Cards";
import PostCard from "./PostCard";

function LatestPosts() {
  return (
    <section className="latest-posts center">
      {posts.slice(0, 3).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default LatestPosts;

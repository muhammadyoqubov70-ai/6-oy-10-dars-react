import PostCard from "./PostCard";

export const posts = [
  {
    id: 1,
    title: "The Future of Web Development",
    description:
      "Exploring the latest trends and technologies shaping the future of web development in 2024.",
    content:
      "Exploring the latest trends and technologies shaping the future of web development in 2024. Modern frameworks, AI-assisted coding, and performance-first design are changing how developers build for the web.",
    category: "Technology",
    date: "Nov 20, 2025",
    image: "https://via.placeholder.com/800x400/4338CA/ffffff?text=Technology",
  },
  {
    id: 2,
    title: "Mastering Productivity",
    description:
      "Proven strategies and tools to boost your productivity and achieve your goals faster.",
    content:
      "Proven strategies and tools to boost your productivity and achieve your goals faster. From time-blocking to deep work sessions, small habits compound into major results over time.",
    category: "Productivity",
    date: "Nov 18, 2025",
    image:
      "https://via.placeholder.com/800x400/6366F1/ffffff?text=Productivity",
  },
  {
    id: 3,
    title: "Design Principles That Matter",
    description:
      "Essential design principles every creator should know to build stunning user experiences.",
    content:
      "Essential design principles every creator should know to build stunning user experiences. Consistency, hierarchy, and whitespace are the foundation of every great interface.",
    category: "Design",
    date: "Nov 15, 2025",
    image: "https://via.placeholder.com/800x400/8B5CF6/ffffff?text=Design",
  },
];

function LatesPost() {
  return (
    <section className="lates-post">
      <h2>Latest Posts</h2>
      <p className="lates-post-subtitle">Check out our most recent articles</p>
      <div className="lates-post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default LatesPost;

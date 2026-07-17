import { Link } from "react-router-dom";
import { usePosts } from "../context/PostContext";
import "./Dashboard.css";

function Dashboard() {
  const { posts, loading, deletePost } = usePosts();

  const totalPosts = posts.length;
  const categories = new Set(posts.map((p) => p.category)).size;
  const totalViews = "12.5K";
  const activeUsers = "1.2K";

  const recentPosts = posts.slice(0, 5);

  const handleDelete = (id) => {
    if (window.confirm("Rostdan ham bu postni o'chirmoqchimisiz?")) {
      deletePost(id);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's an overview of your blog.</p>
      </div>

      {loading ? (
        <p>Yuklanmoqda...</p>
      ) : (
        <>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon stat-icon-blue">📄</div>
              <span className="stat-change positive">+12%</span>
              <h2>{totalPosts}</h2>
              <p>Total Posts</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon-purple">🗂️</div>
              <span className="stat-change positive">+2</span>
              <h2>{categories}</h2>
              <p>Categories</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon-green">📈</div>
              <span className="stat-change positive">+23%</span>
              <h2>{totalViews}</h2>
              <p>Total Views</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon-orange">👥</div>
              <span className="stat-change positive">+8%</span>
              <h2>{activeUsers}</h2>
              <p>Active Users</p>
            </div>
          </div>

          <div className="recent-posts">
            <h3>Recent Posts</h3>
            <p className="recent-posts-subtitle">
              Manage and monitor your latest content
            </p>

            <table className="posts-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentPosts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>
                      <span className="badge">{post.category}</span>
                    </td>
                    <td>{post.date}</td>
                    <td>
                      <span
                        className={
                          post.status === "Published"
                            ? "status published"
                            : "status draft"
                        }
                      >
                        {post.status}
                      </span>
                    </td>
                    <td>
                      <Link
                        to={`/admin/updatepost/${post.id}`}
                        className="action-edit"
                      >
                        Edit
                      </Link>
                      <button
                        className="action-delete"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;

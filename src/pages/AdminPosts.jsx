import { useState } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../context/PostContext";
import "./AdminPosts.css";

function AdminPosts() {
  const { posts, loading, deletePost } = usePosts();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id) => {
    if (window.confirm("Rostdan ham bu postni o'chirmoqchimisiz?")) {
      deletePost(id);
    }
  };

  return (
    <div className="admin-posts">
      <div className="admin-posts-header">
        <div>
          <h1>Posts</h1>
          <p>Manage all your blog posts</p>
        </div>
        <Link to="/admin/createpost" className="create-btn">
          + Create Post
        </Link>
      </div>

      <div className="admin-posts-filters">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="status-select"
        >
          <option value="All">All Status</option>
          <option value="Published">Published</option>
          <option value="Draft">Draft</option>
        </select>
      </div>

      {loading ? (
        <p>Yuklanmoqda...</p>
      ) : (
        <div className="admin-posts-table-wrap">
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
              {filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan="5" className="empty-row">
                    Postlar topilmadi
                  </td>
                </tr>
              ) : (
                filteredPosts.map((post) => (
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
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminPosts;

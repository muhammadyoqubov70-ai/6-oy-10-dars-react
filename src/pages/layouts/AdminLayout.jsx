import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./AdminLayout.css";

function AdminLayout() {
  const { logout } = useAuth();

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <span className="admin-logo-icon">✎</span>
          <div>
            <h2>Blogify</h2>
            <p>Admin Panel</p>
          </div>
        </div>

        <nav className="admin-nav">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              isActive ? "admin-nav-link active" : "admin-nav-link"
            }
          >
            <span>▦</span> Dashboard
          </NavLink>
          <NavLink
            to="/admin/posts"
            className={({ isActive }) =>
              isActive ? "admin-nav-link active" : "admin-nav-link"
            }
          >
            <span>▤</span> Posts
          </NavLink>
          <NavLink
            to="/admin/createpost"
            className={({ isActive }) =>
              isActive ? "admin-nav-link active" : "admin-nav-link"
            }
          >
            <span>+</span> Create Post
          </NavLink>
        </nav>

        <button className="admin-logout" onClick={logout}>
          ⏻ Logout
        </button>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;

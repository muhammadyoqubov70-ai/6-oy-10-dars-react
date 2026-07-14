import { Outlet, Link } from "react-router-dom";

function AdminLayaout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin panel</h2>
        <nav>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/posts">Postlar</Link>
          <Link to="/">Saytga qaytish</Link>
        </nav>
      </aside>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayaout;

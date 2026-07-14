import { Outlet, Link } from "react-router-dom";

function AuthLayaout() {
  return (
    <div className="auth-layout">
      <Link to="/" className="auth-logo">
        Blogify
      </Link>
      <div className="auth-box">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayaout;

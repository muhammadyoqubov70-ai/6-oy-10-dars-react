import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner center">
        <div className="footer-brand">
          <h3 className="footer-logo">📝 Blogify</h3>
          <p>
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>
        <div className="footer-col">
          <h1>Quick Links</h1>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="footer-col">
          <h1>Connect</h1>
          <div className="footer-icons">
            <a href="#" aria-label="GitHub">
              🐙
            </a>
            <a href="#" aria-label="Twitter">
              𝕏
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2025 Blogify. All rights reserved.</div>
    </footer>
  );
}

export default Footer;

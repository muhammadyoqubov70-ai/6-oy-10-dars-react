import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">✏️ Blogify</div>
          <p>
            Create, read, and inspire. Discover amazing stories written by
            talented creators from around the world.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/blog">Posts</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <div className="footer-icons">
            <a href="#" aria-label="Twitter"></a>
            <a href="#" aria-label="GitHub"></a>
            <a href="#" aria-label="LinkedIn">
              💼
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Blogify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

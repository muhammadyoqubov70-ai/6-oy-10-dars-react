import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner center">
        <div className="footer-brand">
          <img src="/Link.svg" alt="" />
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
            <img src="/GitHub.svg" alt="" />
            <img src="/Twitter.svg" alt="" />
            <img src="/LinkedIn.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

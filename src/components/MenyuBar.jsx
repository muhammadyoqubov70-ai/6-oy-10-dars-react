import { Link } from "react-router-dom";

function MenyuBar({ onClose }) {
  return (
    <div className="menyu-overlay">
      <div className="menyu-panel">
        <button className="menyu-close" onClick={onClose}>
          ✕
        </button>
        <nav className="menyu-links">
          <Link to="/" onClick={onClose}>
            Home
          </Link>
          <Link to="/blog" onClick={onClose}>
            Blog
          </Link>
          <Link to="/login" onClick={onClose}>
            Kirish
          </Link>
          <Link to="/register" onClick={onClose}>
            Ro'yxatdan o'tish
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default MenyuBar;

import { useState } from "react";
import { Link } from "react-router-dom";
import MenyuBar from "./MenyuBar";
import Button from "./Button";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        Blogify
      </Link>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      <div className="navbar-actions">
        <Link to="/login">
          <Button text="Kirish" variant="outline" />
        </Link>
        <Link to="/register">
          <Button text="Ro'yxatdan o'tish" variant="filled" />
        </Link>
      </div>

      <button className="navbar-burger" onClick={() => setOpen(true)}>
        ☰
      </button>

      {open && <MenyuBar onClose={() => setOpen(false)} />}
    </header>
  );
}

export default Navbar;

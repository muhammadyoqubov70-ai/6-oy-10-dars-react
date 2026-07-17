// FAYL MANZILI: src/components/Navbar.jsx

import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <section className="navbar-wrap">
      <nav className="navbar center">
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <img
            src="/Link.svg"
            alt="Logo"
            style={{ width: "110px", height: "110px", objectFit: "contain" }} // O'lcham 30px dan 45px ga oshirildi
          />
          <span
            style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}
          ></span>
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/login">
            <Button text="Login" variant="primary" />
          </Link>
        </div>
        <button className="navbar-burger">☰</button>
      </nav>
    </section>
  );
}

export default Navbar;

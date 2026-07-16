`import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <section className="navbar-wrap">
      <nav className="navbar center">
        <Link to="/">
          <img src="/Link.svg" alt="Blogify" />
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
`;

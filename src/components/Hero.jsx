import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="center hero-inner">
        <div className="hero-text">
          <h1>
            Share your thoughts with the <span className="hero-gradient">world</span>
          </h1>
          <p>
            Blogify is the platform where you can freely write down your
            ideas, experiences, and knowledge, and share them with thousands
            of readers.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/posts" className="btn btn-secondary">
              Explore Posts
            </Link>
          </div>
        </div>

        <img
          className="hero-img"
          src="/Hero%20illustration.svg"
          alt="Blogify hero illustration"
        />
      </div>
    </section>
  );
}

export default Hero;

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="center hero-inner">
        <div className="hero-text">
          <h1>
            Fikrlaringizni <span className="hero-gradient">dunyoga</span> ulashing
          </h1>
          <p>
            Blogify — bu sizning fikr, tajriba va bilimlaringizni bemalol
            yozib, minglab o'quvchilarga yetkazish uchun platforma.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">
              Boshlash
            </Link>
            <Link to="/blog" className="btn btn-secondary">
              Postlarni ko'rish
            </Link>
          </div>
        </div>

        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80"
          alt="Blogify hero"
        />
      </div>
    </section>
  );
}

export default Hero;

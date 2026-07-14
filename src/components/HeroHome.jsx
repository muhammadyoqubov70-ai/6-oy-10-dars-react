import { Link } from "react-router-dom";
import Button from "./Button";

function HeroHome() {
  return (
    <section className="hero-home">
      <h1>Hikoyalar yarating, o'qing, ilhomlaning</h1>
      <p>Zamonaviy blog platformasi — yozuvchilar va o'quvchilar uchun</p>
      <Link to="/blog">
        <Button text="Bloglarni ko'rish" variant="filled" />
      </Link>
    </section>
  );
}

export default HeroHome;

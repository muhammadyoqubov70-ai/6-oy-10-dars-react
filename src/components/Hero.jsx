import Button from "./Button";
import RightArrow from "./RightArrow";

function Hiro() {
  return (
    <section className="hero">
      <div className="hero-inner center">
        <div className="hero-text">
          <h1>
            <div>Create, Read,</div>
            <div className="hero-gradient">Inspire.</div>
          </h1>
          <p>Discover stories written by amazing people.</p>
          <div className="hero-buttons">
            <Button
              text="Explore posts"
              variant="primary"
              RightArrow={RightArrow}
            />
            <Button text="Get started" variant="secondary" />
          </div>
        </div>
        {/* Rasm public papkasida bo'lgani uchun import shart emas, to'g'ri nomini yozamiz */}
        <img
          className="hero-img"
          src="/Hero illustration.svg"
          alt="Hero illustration"
        />
      </div>
    </section>
  );
}

export default Hiro;

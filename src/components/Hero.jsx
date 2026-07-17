import Button from "./Button";
import RightArrow from "./RightArrow";
// 1. Rasmni import qilib olamiz (fayl yo'lini to'g'ri ko'rsating)
import HiroSvg from "./Hiro.svg"; // yoki "./assets/Hiro.svg" qayerda turganiga qarab

function Hiro() {
  return (
    <section className="hero">
      <div className="hero-inner center">
        <div className="hero-text">
          <h1>
            <div>Create, Read,</div>
            <img src="" alt="" />
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
        {/* 2. Import qilingan o'zgaruvchini src ichiga yozamiz */}
        <img className="hero-img" src={HiroSvg} alt="Hero illustration" />
      </div>
    </section>
  );
}

export default Hiro;

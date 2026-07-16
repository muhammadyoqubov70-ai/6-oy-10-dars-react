import ChoosCard from "./ChooseCart";
import { features } from "../data/Product";

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-choose-head center">
        <h1>Why Choose Blogify?</h1>
        <p>Built with modern technologies and best practices.</p>
      </div>
      <div className="why-choose-grid center">
        {features.map((item, index) => (
          <ChoosCard key={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;

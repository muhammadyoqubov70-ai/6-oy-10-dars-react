import ChoosCard from "./ChooseCard";
import { features } from "../product";

function WhyChoos() {
  return (
    <section className="why-choose">
      <div className="why-choose-head center">
        <h1>Why Choose Blogify?</h1>
        <p>
          Built with modern technologies and best practices to provide the best
          blogging experience.
        </p>
      </div>
      <div className="why-choose-grid center">
        {features.map((item, index) => (
          <ChoosCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;

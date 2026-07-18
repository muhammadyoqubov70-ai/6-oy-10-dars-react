import { PenLine, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: PenLine,
    title: "Easy Writing",
    desc: "Create your posts quickly and easily with our simple, user-friendly editor.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    desc: "Built with React, the site runs smoothly and loads incredibly fast.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    desc: "Your account and data are fully protected at all times.",
  },
];

function Choose() {
  return (
    <section className="center why-choose">
      <div className="why-choose-head">
        <h1>Why Choose Blogify?</h1>
        <p>The most comfortable platform for writing and reading blogs</p>
      </div>

      <div className="why-choose-grid">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="choose-card">
              <Icon size={40} color="#4346ef" style={{ marginBottom: "24px" }} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Choose;

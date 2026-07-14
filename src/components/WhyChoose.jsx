const reasons = [
  {
    icon: "⚡",
    title: "Fast",
    text: "Lightning-fast performance with modern web technologies for the best reading experience.",
  },
  {
    icon: "🛡️",
    title: "Secure",
    text: "Your data is protected with industry-standard security practices and encryption.",
  },
  {
    icon: "⚙️",
    title: "Easy to Manage",
    text: "Intuitive admin dashboard makes content management effortless and enjoyable.",
  },
];

function WhyChoose() {
  return (
    <section className="why-choose">
      <h2>Why Choose Blogify?</h2>
      <p className="why-choose-subtitle">
        Built with modern technologies and best practices to provide the best
        blogging experience.
      </p>
      <div className="why-choose-grid">
        {reasons.map((r, i) => (
          <div className="why-choose-card" key={i}>
            <div className="why-choose-icon">{r.icon}</div>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;

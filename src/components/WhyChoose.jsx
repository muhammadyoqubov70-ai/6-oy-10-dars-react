const reasons = [
  {
    title: "Oson yozish",
    text: "Har kim o'z fikrini bemalol ulashishi mumkin",
  },
  { title: "Keng auditoriya", text: "Minglab o'quvchilarga yeting" },
  { title: "Bepul platforma", text: "Hech qanday to'lovsiz foydalaning" },
];

function WhyChoose() {
  return (
    <section className="why-choose">
      <h2>Nega aynan Blogify?</h2>
      <div className="why-choose-grid">
        {reasons.map((r, i) => (
          <div className="why-choose-card" key={i}>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;

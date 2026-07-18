import { PenLine, Zap, ShieldCheck, Globe2 } from "lucide-react";

const features = [
  {
    icon: PenLine,
    title: "Oson yozish",
    desc: "Sodda va qulay editor yordamida postlaringizni tez va oson yarating.",
  },
  {
    icon: Zap,
    title: "Tez ishlaydi",
    desc: "Sayt React asosida qurilgan bo'lib, juda tez va silliq ishlaydi.",
  },
  {
    icon: ShieldCheck,
    title: "Xavfsiz",
    desc: "Sizning hisobingiz va ma'lumotlaringiz to'liq himoyalangan.",
  },
  {
    icon: Globe2,
    title: "Keng auditoriya",
    desc: "Postlaringiz minglab o'quvchilarga yetib boradi.",
  },
];

function Choose() {
  return (
    <section className="center why-choose">
      <div className="why-choose-head">
        <h1>Nega aynan Blogify?</h1>
        <p>Blog yozish va o'qish uchun eng qulay platformani tanlang</p>
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

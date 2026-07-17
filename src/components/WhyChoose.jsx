// FAYL MANZILI: src/components/WhyChoose.jsx

import ChooseCart from "./ChooseCart"; // Agar ChooseCart ishlatilgan bo'lsa

// Karta komponenti (Har bitta karta qanday ko'rinishini belgilaydi)
function ChoosCard({ icon, title, description }) {
  return (
    <div className="choose-card">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Kartalar ma'lumotlari (FAQAT BIR MARTA 3 TA KARTA)
const cardsData = [
  {
    icon: "https://img.icons8.com/ios-filled/100/6a0dad/shield.png",
    title: "Fast",
    description: "Lightning-fast performance with modern web technologies.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/100/6a0dad/lock.png",
    title: "Secure",
    description:
      "Your data is protected with industry-standard security practices and encryption.",
  },
  {
    icon: "https://img.icons8.com/ios-filled/100/6a0dad/settings.png",
    title: "Easy to Manage",
    description:
      "Intuitive admin dashboard makes content management effortless and enjoyable.",
  },
];

function WhyChoose() {
  return (
    <section
      className="choose-section center"
      style={{ padding: "60px 0", textAlign: "center" }}
    >
      <div className="choose-title">
        <h2>Why Choose Blogify?</h2>
        <p>Built with modern technologies and best practices.</p>
      </div>

      <div
        className="choose-container"
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        {/* Mana shu erda cardsData 1 marta aylanadi va faqat 3 ta karta chiqadi */}
        {cardsData.map((card, index) => (
          <ChoosCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;

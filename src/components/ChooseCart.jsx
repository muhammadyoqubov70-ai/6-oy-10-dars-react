// FAYL: src/components/ChooseCart.jsx

// 1. Kichik karta komponenti
function ChoosCard({ icon, title, description }) {
  return (
    <div className="choose-card">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// 2. Kartalar ma'lumotlari (FAQAT BIR MARTA e'lon qilinishi kerak)
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

// 3. Asosiy komponent
function ChooseCart() {
  return (
    <section className="choose-section center">
      <div className="choose-title">
        <h2>Why Choose Blogify?</h2>
        <p>Built with modern technologies and best practices.</p>
      </div>

      <div className="choose-container">
        {cardsData.map((card, index) => (
          <ChoosCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default ChooseCart;

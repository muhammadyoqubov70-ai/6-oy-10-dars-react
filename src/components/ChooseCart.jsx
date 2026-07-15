function ChoosCard({ icon, title, description }) {
  return (
    <div className="choose-card">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ChoosCard;

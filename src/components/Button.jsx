function Button({ text, variant, onClick, RightArrow, className = "" }) {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      <span>{text}</span>
      {RightArrow && <RightArrow />}
    </button>
  );
}

export default Button;

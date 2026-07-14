function Button({ text, variant = "filled", onClick, type = "button" }) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

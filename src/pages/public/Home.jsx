import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", // To'liq ekranni egallaydi
      width: "100vw",
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "#ffffff",
      textAlign: "center",
      fontFamily: "sans-serif",
      zIndex: 9999
    }}>
      <h1 style={{ fontSize: "3rem", color: "#333", marginBottom: "10px" }}>
        Xush kelibsiz! 👋
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "30px", maxWidth: "500px" }}>
        Saytdagi barcha maqolalar va bloglarni ko'rish uchun quyidagi tugmani bosing.
      </p>
      <button 
        onClick={() => navigate("/posts")} // Login emas, to'g'ridan-to'g'ri blog postlarga olib kiradi
        style={{
          padding: "15px 40px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: "white",
          background: "#6366f1",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(99, 102, 241, 0.2)",
          transition: "background 0.2s"
        }}
        onMouseOver={(e) => e.target.style.background = "#4f46e5"}
        onMouseOut={(e) => e.target.style.background = "#6366f1"}
      >
        Saytga kirish
      </button>
    </div>
  );
}

export default Home;

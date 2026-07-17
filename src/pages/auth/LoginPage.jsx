import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const success = await login(email, password);
    setLoading(false);
    
    // MANA SHU YERNI /admin GA O'ZGARTIRDIK:
    if (success) navigate("/admin");
  };

  return (
    <div className="login-page">
      <form className="login-page__card" onSubmit={handleSubmit}>
        <h2 className="login-page__title">Welcome back</h2>
        <p className="login-page__subtitle">
          Enter your credentials to continue
        </p>

        <label className="login-page__label">Email</label>
        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-page__input"
          required
        />

        <label className="login-page__label">Parol</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-page__input"
          required
        />

        {error && <p className="login-page__error">{error}</p>}

        <button type="submit" className="login-page__btn" disabled={loading}>
          {loading ? "Kirilmoqda..." : "Kirish"}
        </button>

        <p className="login-page__footer">
          Akountingiz yo'qmi? <Link to="/register">Ro'yxatdan o'tish</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;

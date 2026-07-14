import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("Barcha maydonlarni to'ldiring");
      return;
    }

    if (form.password.length < 6) {
      setError("Parol kamida 6 belgidan iborat bo'lishi kerak");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u) => u.email === form.email)) {
      setError("Bu email allaqachon ro'yxatdan o'tgan");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="auth-split">
      <div className="auth-split-left">
        <Link to="/" className="auth-logo">
          ✏️ Blogify
        </Link>
        <Link to="/" className="auth-back">
          ← Back to Home
        </Link>

        <div className="auth-card">
          <h1>Create Account</h1>
          <p className="auth-subtitle">
            Join Blogify and start sharing your stories
          </p>

          {error && <p className="auth-error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <Input
              label="Name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange("name")}
            />
            <Input
              label="Email"
              type="email"
              placeholder="name@example.com"
              value={form.email}
              onChange={handleChange("email")}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange("password")}
            />
            <Button text="Sign Up" variant="filled" type="submit" />
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>

      <div className="auth-split-right">
        <h2>Start Your Journey</h2>
        <p>Join thousands of creators sharing their stories on Blogify</p>
      </div>
    </div>
  );
}

export default Register;

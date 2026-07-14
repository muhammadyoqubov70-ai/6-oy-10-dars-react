import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(
      (u) => u.email === form.email && u.password === form.password,
    );

    if (!found) {
      setError("Email yoki parol noto'g'ri");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(found));
    navigate("/");
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
          <h1>Welcome Back</h1>
          <p className="auth-subtitle">
            Enter your credentials to access your account
          </p>

          {error && <p className="auth-error">{error}</p>}

          <form onSubmit={handleSubmit}>
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
            <Button text="Login" variant="filled" type="submit" />
          </form>

          <p className="auth-switch">
            Don't have an account? <Link to="/register">Sign up</Link>
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

export default Login;

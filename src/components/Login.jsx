import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Kirish</h2>
      {error && <p className="auth-error">{error}</p>}
      <Input
        label="Email"
        type="email"
        placeholder="email@example.com"
        value={form.email}
        onChange={handleChange("email")}
      />
      <Input
        label="Parol"
        type="password"
        placeholder="********"
        value={form.password}
        onChange={handleChange("password")}
      />
      <Button text="Kirish" variant="filled" type="submit" />
    </form>
  );
}

export default Login;

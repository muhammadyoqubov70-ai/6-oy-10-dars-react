import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Ro'yxatdan o'tish</h2>
      {error && <p className="auth-error">{error}</p>}
      <Input
        label="Ism"
        type="text"
        placeholder="Ismingiz"
        value={form.name}
        onChange={handleChange("name")}
      />
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
      <Button text="Ro'yxatdan o'tish" variant="filled" type="submit" />
    </form>
  );
}

export default Register;

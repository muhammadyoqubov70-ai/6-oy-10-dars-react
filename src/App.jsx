import { Routes, Route } from "react-router-dom";
import PublicLayaout from "./lyaoutes/PublicLayaout";
import AuthLayaout from "./lyaoutes/AuthLayaout";
import AdminLayaout from "./lyaoutes/AdminLayaout";
import HeroHome from "./components/HeroHome";
import WhyChoose from "./components/WhyChoose";
import LatesPost from "./components/LatesPost";
import Input from "./components/Input";
import Button from "./components/Button";
import "./App.css";

function Home() {
  return (
    <>
      <HeroHome />
      <WhyChoose />
      <LatesPost />
    </>
  );
}

function Blog() {
  return (
    <div className="page-container">
      <LatesPost />
    </div>
  );
}

function Login() {
  return (
    <form className="auth-form">
      <h2>Kirish</h2>
      <Input label="Email" type="email" placeholder="email@example.com" />
      <Input label="Parol" type="password" placeholder="********" />
      <Button text="Kirish" variant="filled" type="submit" />
    </form>
  );
}

function Register() {
  return (
    <form className="auth-form">
      <h2>Ro'yxatdan o'tish</h2>
      <Input label="Ism" type="text" placeholder="Ismingiz" />
      <Input label="Email" type="email" placeholder="email@example.com" />
      <Input label="Parol" type="password" placeholder="********" />
      <Button text="Ro'yxatdan o'tish" variant="filled" type="submit" />
    </form>
  );
}

function AdminDashboard() {
  return (
    <div className="admin-page">
      <h2>Bosh sahifa</h2>
      <p>Statistika shu yerda bo'ladi</p>
    </div>
  );
}

function AdminPosts() {
  return (
    <div className="admin-page">
      <h2>Postlarni boshqarish</h2>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<PublicLayaout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Route>

      <Route element={<AuthLayaout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/admin" element={<AdminLayaout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="posts" element={<AdminPosts />} />
      </Route>
    </Routes>
  );
}
import PostDetail from "./components/PostDetail";

// ...

<Route path="/" element={<PublicLayaout />}>
  <Route index element={<Home />} />
  <Route path="blog" element={<Blog />} />
  <Route path="blog/:id" element={<PostDetail />} />
</Route>;

export default App;

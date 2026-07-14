import { Routes, Route } from "react-router-dom";
import PublicLayaout from "./lyaoutes/PublicLayaout";
import AuthLayaout from "./lyaoutes/AuthLayaout";
import AdminLayaout from "./lyaoutes/AdminLayaout";
import HeroHome from "./components/HeroHome";
import WhyChoose from "./components/WhyChoose";
import LatesPost from "./components/LatesPost";
import PostDetail from "./components/PostDetail";
import Login from "./components/Login";
import Register from "./components/Register";
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
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<PostDetail />} />
      </Route>

      <Route element={<AuthLayaout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="admin" element={<AdminLayaout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="posts" element={<AdminPosts />} />
      </Route>
    </Routes>
  );
}

export default App;

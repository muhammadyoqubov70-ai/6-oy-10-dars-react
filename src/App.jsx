import React from "react";
import CreatPost from "./pages/admin/CreatPost";
import Dashboard from "./pages/admin/Dashboard";
import UpdatePost from "./pages/admin/UpdatePost";
import LoginPage from "./pages/auth/LoginPage";
import Error from "./pages/public/Error";
import Home from "./pages/public/Home";
import PostDetails from "./pages/public/PostDetail";
import Posts from "./pages/public/Posts";
import PubliLayout from "./pages/layouts/PubliLayout";
import AuthLaout from "./pages/layouts/AuthLaout";
import AdminLayout from "./pages/layouts/AdminLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PubliLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts", element: <Posts /> },
      { path: "posts/:id", element: <PostDetails /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "updatepost", element: <UpdatePost /> },
      { path: "createpost", element: <CreatPost /> },
    ],
  },
  {
    path: "/login",
    element: <AuthLaout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

import LoginPage from "./pages/auth/LoginPage";
import Error from "./pages/public/Error";
import Home from "./pages/public/Home";
import PostDetails from "./pages/public/PostDetail";
import Posts from "./pages/public/Posts";
import PubliLayout from "./pages/layouts/PubliLayout";
import AuthLaout from "./pages/layouts/AuthLaout";
import AdminLayout from "./pages/layouts/AdminLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatPost from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";
import UpdatePost from "./pages/UpdatePost";

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
  { path: "*", element: <Error /> },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

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
import AdminPosts from "./pages/AdminPosts";
import UpdatePost from "./pages/UpdatePost";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { PostProvider } from "./context/PostContext";

const routes = createBrowserRouter([
  {
    // Eng birinchi kiriladigan mutlaqo toza sahifa (Layout yo'q)
    path: "/",
    element: <Home />, 
  },
  {
    // Navbar va Footer faqat mana shu ichki sahifalarda ko'rinadi
    path: "/",
    element: <PubliLayout />,
    children: [
      { path: "posts", element: <Posts /> },
      { path: "posts/:id", element: <PostDetails /> },
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "posts", element: <AdminPosts /> },
          { path: "updatepost/:id", element: <UpdatePost /> },
          { path: "createpost", element: <CreatPost /> },
        ],
      },
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
  return (
    <AuthProvider>
      <PostProvider>
        <RouterProvider router={routes} />
      </PostProvider>
    </AuthProvider>
  );
}

export default App;

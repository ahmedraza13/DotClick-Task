import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import '../style.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);

export default function Navigation() {
  return <RouterProvider router={router} />;
}

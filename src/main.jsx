import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./component/Products";
import "./index.css";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    children: [
      {
        path: "/",
        element: <Products></Products>,
      },

      {
        path: "/create",
        element: <CreatePage></CreatePage>,
      },
      {
        path: "/edit/:id",
        element: <EditPage></EditPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

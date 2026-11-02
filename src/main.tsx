import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./index";
import "./styles/home.css";

import Home from "./components/home";
// import Resume from "./components/resume";
import ProjectPage from "./components/projectPage";
import NotFound from "./components/notfound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },

      // {
      //   path: "/resume",
      //   element: <Resume />,
      // },

      {
        path: "/portfolio/:name",
        element: <ProjectPage />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
);

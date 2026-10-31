import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./index";
import Home from "./components/home";
import About from "./components/aboutme";
import PortfolioComponent from "./components/portfolioComp";
import Resume from "./components/resume";
import Contact from "./components/contact";
import ProjectPage from "./components/projectPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <PortfolioComponent />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },

      {
        path: "/portfolio/:name",
        element: <ProjectPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
);

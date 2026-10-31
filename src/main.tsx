import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/projects/:name",
        element: <CloserLook />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
);

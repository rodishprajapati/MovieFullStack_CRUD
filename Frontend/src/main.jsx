import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import API from "./pages/api";
import "./index.css";

import EditMovies from "./pages/editMovies";

import AddMovies from "./pages/addMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <API />,
  },
  // {
  //   path: "/addData",
  //   element:<ADDMovies/>,
  // },
  {
    path: "/movies",
    element: <AddMovies />,
  },
  {
    path: "/movies/:movie_id",
    element: <EditMovies />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

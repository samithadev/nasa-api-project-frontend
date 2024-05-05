import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/root.layout.jsx";
import HomePage from "./pages/home/home.page.jsx";
import PictureOftheDay from "./pages/pictureOftheDay/pod.page.jsx";
import MarsRoverPhotosPage from "./pages/marsRoverPhotos/marsRoverPhotos.page.jsx";
import LoginPage from "./pages/login/login.page.jsx";
import RegisterPage from "./pages/register/register.page.jsx";
import MainLayout from "./layout/main.layout.jsx";
import EarthDailyImageryPage from "./pages/earthDailyImagery/earthDailyImagery.page.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "main",
        element: <MainLayout />,
        children: [
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "link01",
            element: <PictureOftheDay />,
          },
          {
            path: "link02",
            element: <EarthDailyImageryPage />,
          },
          {
            path: "link03",
            element: <MarsRoverPhotosPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

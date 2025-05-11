import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/home/Home";
import CategoryNews from "../pages/categoryNews/CategoryNews";
import About from "../compontes/about/About";
import Career from "../compontes/career/Career";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/register/Register";
import Logins from "../pages/login/Login";
import NewsDetails from "../pages/newsDetails/NewsDetails";
import PrivateRoute from "../compontes/privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "categoryNews/:id",
        hydrateFallbackElement: <p>Loading....</p>,
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "career",
        Component: Career,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Logins></Logins>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
     hydrateFallbackElement: <p>Loading....</p>,
    loader: () => fetch("/news.json"),
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
  },
]);

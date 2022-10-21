import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Catagories from "../pages/catagory/catagories/Catagories";
import Login from "../pages/login/login/Login";
import Home from "./../pages/home/Home";
import Register from "./../pages/login/register/Register";
import News from "./../pages/news/newsPost/News";
import TermsAndConditions from "./../pages/others/TermsAndConditions";
import Profile from "./../pages/profile/Profile";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // { path: "/", element: <Home /> },
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/news/"),
      },
      {
        path: "/catagories/:catagoriesId",
        element: (
          <PrivateRoutes>
            <Catagories />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/catagories/${params.catagoriesId}`),
      },
      {
        path: "/news/:newsId",
        element: (
          <PrivateRoutes>
            <News />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.newsId}`),
      },

      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/terms", element: <TermsAndConditions /> },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;

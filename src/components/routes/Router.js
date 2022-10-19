import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import Catagories from "../pages/catagory/catagories/Catagories";
import Home from "./../pages/home/Home";
import News from "./../pages/news/newsPost/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/catagories/:catagoriesId", element: <Catagories /> },
      { path: "/news/:newsId", element: <News /> },
    ],
  },
]);

export default router;

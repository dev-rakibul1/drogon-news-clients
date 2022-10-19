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
      // { path: "/", element: <Home /> },
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/news/"),
      },
      {
        path: "/catagories/:catagoriesId",
        element: <Catagories />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/catagories/${params.catagoriesId}`),
      },
      {
        path: "/news/:newsId",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.newsId}`),
      },
    ],
  },
]);

export default router;

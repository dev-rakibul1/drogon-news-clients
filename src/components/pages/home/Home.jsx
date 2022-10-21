import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/usercontext/UserContext";
import NewsSummaryCard from "../shared/newsSummaryCard/NewsSummaryCard";

const Home = () => {
  // use context
  const data = useContext(AuthContext);
  console.log(data);

  // data load with use loader
  const allNews = useLoaderData();
  console.log(allNews);

  return (
    <div>
      <h2 className="display-6">Total news: {allNews?.length}</h2>
      {allNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Home;

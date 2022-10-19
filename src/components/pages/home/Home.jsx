import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../shared/newsSummaryCard/NewsSummaryCard";

const Home = () => {
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

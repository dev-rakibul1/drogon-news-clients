import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "./../../shared/newsSummaryCard/NewsSummaryCard";

const Catagories = () => {
  const category = useLoaderData();
  console.log(category);

  return (
    <div>
      <h2 className="display-6 mb-4">Total news found: {category.length}</h2>
      {category.map((news) => (
        <NewsSummaryCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Catagories;

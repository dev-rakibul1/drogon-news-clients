import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideShared = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories-news")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);

  return (
    <div className="text-start">
      <h3>All catagories {catagories.length}</h3>
      {catagories.map((category) => (
        <li key={category.id}>
          <Link to={`/catagories/${category.id}`}>{category?.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default LeftSideShared;

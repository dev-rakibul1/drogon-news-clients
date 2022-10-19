import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const { title, image_url, details, category_id } = useLoaderData();
  // console.log(singleNews);
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/`}>
            <Button variant="primary">Go to home</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;

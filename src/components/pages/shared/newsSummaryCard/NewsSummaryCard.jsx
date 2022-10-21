import React from "react";
import Card from "react-bootstrap/Card";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const { title, _id, author, details, total_view, image_url, rating } = news;
  //   console.log(news);
  return (
    <div>
      <Card className="text-center mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center h-100">
            <img
              className="align-self-center mr-3 rounded-circle me-3"
              src={author?.img}
              alt="author"
              style={{ width: "54px", height: "54px" }}
            />
            <div className="text-start">
              <h6 className="fw-bold text-capitalize">{author?.name}</h6>
              <p className="fs-6 fw-light">{author?.published_date}</p>
            </div>
          </div>

          <div>
            <FaRegBookmark /> <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text className="text-justify mt-2">
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read more</Link>
              </p>
            ) : (
              details
            )}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <div>
            <FaStar /> {rating?.number}
          </div>
          <div>
            <FaEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;

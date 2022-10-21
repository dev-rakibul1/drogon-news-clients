import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h1>Here is our terms and conditions</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        similique ex cupiditate nemo ullam. Architecto aut adipisci veritatis
        iste consectetur quasi ea! Possimus, facere necessitatibus? Rerum
        aperiam a ullam accusantium!
      </p>
      <Link to="/register">
        <Button variant="primary">Go back</Button>{" "}
      </Link>
    </div>
  );
};

export default TermsAndConditions;

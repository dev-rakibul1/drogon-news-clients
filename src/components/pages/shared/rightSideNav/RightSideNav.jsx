import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AuthContext } from "./../../../context/usercontext/UserContext";

const RightSideNav = () => {
  const { googleSign } = useContext(AuthContext);
  // console.log(googleSign);

  const googleBtnHandler = () => {
    googleSign()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button variant="outline-primary my-1 w-100" onClick={googleBtnHandler}>
        {" "}
        <FaGoogle /> Login with Google
      </Button>{" "}
      <Button variant="outline-dark my-1 w-100">
        <FaGithub /> Login with Github
      </Button>{" "}
      {/* social list group */}
      <div className="mt-5">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaLinkedin /> Linked in
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram /> Instagram
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaWhatsapp /> Whats app
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightSideNav;

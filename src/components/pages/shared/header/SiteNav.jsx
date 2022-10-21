import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import LeftSideShared from "../leftSideShared/LeftSideShared";
import { AuthContext } from "./../../../context/usercontext/UserContext";

const SiteNav = () => {
  // data collecting
  const { user, logOut } = useContext(AuthContext);

  const onClickLogOutHandler = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="mb-5"
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/">Drogon news</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="#features">Features</Nav.Link>
              <Nav.Link to="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <div className="d-lg-none">
                <LeftSideShared />
              </div>
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link to="#deets">{user?.displayName}</Nav.Link>
              <Link eventKey={2} to="/profile">
                {user?.photoURL ? (
                  <Image
                    style={{
                      weight: "50px",
                      height: "50px",
                      borderRadius: "100%",
                      border: "1px solid #ddd",
                      padding: "5px",
                    }}
                    src={user.photoURL}
                  ></Image>
                ) : undefined}
              </Link>
              {user?.uid ? (
                <>
                  {" "}
                  <Nav.Link onClick={onClickLogOutHandler}>
                    {" "}
                    <FaPowerOff />{" "}
                  </Nav.Link>
                </>
              ) : (
                <>
                  <>
                    <Link to="/login">Login</Link>
                  </>
                  <>
                    <Link to="/register">Register</Link>
                  </>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default SiteNav;

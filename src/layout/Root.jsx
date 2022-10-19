import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SiteNav from "../components/pages/shared/header/SiteNav";
import LeftSideShared from "./../components/pages/shared/leftSideShared/LeftSideShared";
import RightSideNav from "./../components/pages/shared/rightSideNav/RightSideNav";

const Root = () => {
  return (
    <div>
      <SiteNav />
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSideShared />
          </Col>
          <Col lg="7">
            <Outlet />
          </Col>
          <Col lg="3">
            <RightSideNav />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Root;

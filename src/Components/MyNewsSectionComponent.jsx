import React from "react";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";
import { Col, Container } from "react-bootstrap";
import { height } from "@mui/system";

const MyNewsSectionComponent = () => {
  return (
    // <div>
    //
    // </div>
    <Container style={{ height: "100%" }}>
      <div className="body">
        <Col md={3} lg={2} className="d-none d-md-block ">
          <Leftside />
        </Col>
        <Col md={6}>
          <Main />
        </Col>
        <Col lg={3} className="d-none d-lg-block">
          <Rightside />
        </Col>
      </div>
    </Container>
  );
};
export default MyNewsSectionComponent;

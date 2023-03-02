import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Notizie from "./Notizie";

const MyNewsSectionComponent = () => {
  return (
    // <div>
    //
    // </div>
    <Container className="py-4" style={{ marginTop: "80px" }}>
      <Row>
        <Col xs={12} md={7} xl={7} className="offset-xl-1">
          {" "}
          <Notizie />
        </Col>
        <Col
          xs={4}
          md={5}
          xl={3}
          className="d-none d-md-block"
          style={{ backgroundColor: "#f3f2ef" }}
        ></Col>
      </Row>
    </Container>
  );
};
export default MyNewsSectionComponent;

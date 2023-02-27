import { Card, Row, Col, Button } from "react-bootstrap";
import { EyeFill, Pencil, PlusLg } from "react-bootstrap-icons";
import { useState } from "react";

const MyFormationComponent = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Card className="my-2 pt-3 pb-3 text-start position-relative">
        <Card.Body className="pb-0">
          <Button
            className=" position-absolute bg-transparent p-0"
            style={{
              border: "none",
              top: "25%",
              right: "13%",
              fontSize: "1.5rem",
            }}
          >
            <PlusLg className="text-dark" />
          </Button>
          <Button
            className=" position-absolute bg-transparent p-0"
            style={{
              border: "none",
              top: "25%",
              right: "3%",
              fontSize: "1.4rem",
            }}
          >
            <Pencil className="text-dark" />
          </Button>
          <Row>
            <Col xs={12} md={4} className="d-flex">
              <Card.Title
                className="mb-0"
                style={{ fontSize: "1.2rem", alignSelf: "center" }}
              >
                {"Formazione"}
              </Card.Title>
            </Col>
          </Row>

          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontWeight: "400" }}
          >
            <EyeFill className="me-2" />
            Solo per te
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyFormationComponent;

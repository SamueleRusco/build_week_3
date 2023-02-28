import { Card, Row, Col, Button } from "react-bootstrap";
import {
  EyeFill,
  Pencil,
  PlusLg,
  QuestionCircleFill,
} from "react-bootstrap-icons";
import { useState } from "react";

const MyProfileSettongsComponent = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Card className="my-2 pt-3 pb-3 text-start position-relative">
        <Card.Body className="pb-0">
          <Button
            className=" position-absolute bg-transparent p-0"
            style={{
              border: "none",
              top: "16%",
              right: "9%",
              fontSize: "1rem",
            }}
          >
            <QuestionCircleFill style={{ color: "grey" }} />
          </Button>
          <Button
            className=" position-absolute bg-transparent p-0"
            style={{
              border: "none",
              top: "60%",
              right: "9%",
              fontSize: "1rem",
            }}
          >
            <QuestionCircleFill style={{ color: "grey" }} />
          </Button>

          <Row>
            <Col
              xs={11}
              className="pb-3"
              style={{ borderBottom: "1px solid grey" }}
            >
              <Card.Title
                className="mb-0"
                style={{
                  fontSize: "1rem",
                  alignSelf: "center",
                  color: "grey",
                }}
              >
                {"Modifica il profilo pubblico e l'URL"}
              </Card.Title>
            </Col>
            <Col xs={11} className="pt-3">
              <Card.Title
                className="mb-0"
                style={{
                  fontSize: "1rem",
                  alignSelf: "center",
                  color: "grey",
                }}
              >
                {"Aggiungi il tuo profilo in un altra lingua"}
              </Card.Title>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyProfileSettongsComponent;

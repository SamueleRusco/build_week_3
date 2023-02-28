import { Card, Row, Col, Button } from "react-bootstrap";
import { EyeFill, Pencil, PlusLg } from "react-bootstrap-icons";
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
              top: "25%",
              right: "13%",
              fontSize: "1.5rem",
            }}
          >
            <PlusLg className="text-dark" />
          </Button>

          <Row>
            <Col xs={11}>
              <Card.Title
                className="mb-0"
                style={{
                  fontSize: "1.1rem",
                  alignSelf: "center",
                  color: "grey",
                }}
              >
                {"Modifica il profilo pubblico e l'url"}
              </Card.Title>
              <Col xs={11}>
                <Card.Title
                  className="mb-0"
                  style={{
                    fontSize: "1.1rem",
                    alignSelf: "center",
                    color: "grey",
                  }}
                >
                  {"Aggiungi il tuo profilo in un altra lingua"}
                </Card.Title>
              </Col>
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
export default MyProfileSettongsComponent;

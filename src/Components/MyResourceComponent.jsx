import { Card, Row, Col, Button, Badge } from "react-bootstrap";
import {
  ArrowRight,
  EyeFill,
  PeopleFill,
  Router,
  XLg,
} from "react-bootstrap-icons";
import { useState } from "react";

const MyResourceComponent = () => {
  const [visible, setVisible] = useState(true);
  const [contentMode, setContentMode] = useState(false);
  return (
    <>
      {visible && (
        <Card className="my-2 pt-3 pb-2 text-start">
          <Card.Body>
            <Card.Title style={{ fontSize: "1.2rem" }}>{"Risorse"}</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ fontWeight: "400" }}
            >
              <EyeFill className="me-2" />
              Solo per te
            </Card.Subtitle>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Row>
                  <Col xs={12}>
                    <p
                      className="mb-0"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      <Router className="text-secondary" /> Modalità creazione
                      di contenuti
                      <Badge
                        className="ms-1"
                        onClick={() => {
                          setContentMode(!contentMode);
                        }}
                        bg="secondary"
                        style={{ cursor: "pointer" }}
                      >
                        {contentMode ? "Si" : "No"}
                      </Badge>
                    </p>
                    <p>
                      Fatti scoprire, metti in risalto i contenuti sul tuo
                      profilo e accedi agli strumenti di creazione
                    </p>
                  </Col>
                  <Col xs={12} style={{ borderTop: "1px solid lightgrey" }}>
                    <p
                      className="mb-0"
                      style={{ fontSize: "1rem", fontWeight: "600" }}
                    >
                      <PeopleFill className="me-2 text-secondary" />
                      La mia rete
                    </p>
                    <p>Salva e gestisci i tuoi collegamenti e interessi.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Button
              className=" position-absolute bg-transparent p-0"
              style={{
                border: "none",
                top: "10%",
                right: "3%",
              }}
            >
              <XLg
                className="text-dark"
                onClick={() => {
                  setVisible(false);
                }}
              />
            </Button>
          </Card.Body>
          <div
            className="text-center pt-2"
            style={{
              borderTop: "1px solid lightgrey",
              fontWeight: "600",
              color: "grey",
            }}
          >
            Mostra tutte le attività <ArrowRight />
          </div>
        </Card>
      )}
    </>
  );
};
export default MyResourceComponent;

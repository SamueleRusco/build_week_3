import { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { EyeFill, XLg } from "react-bootstrap-icons";
import MyButtonComponent from "./MyButtonComponent";

const MySkillsQuizComponent = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && (
        <Card className="my-2 py-3 text-start">
          <Card.Body>
            <Card.Title style={{ fontSize: "1.2rem" }}>
              {"Rispondi a un quiz sulle competenze"}
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ fontWeight: "400" }}
            >
              <EyeFill className="me-2" />
              Solo per te
            </Card.Subtitle>
            <Card>
              <Card.Body>
                <Row>
                  <Col xs={12}>
                    <h4 style={{ fontSize: "1rem" }}>
                      Distinguiti nelle ricerche dei recruiter
                    </h4>
                  </Col>
                  <Col xs={12}>
                    <p>
                      I candidati che guadagnano un badge di competenza hanno il
                      20% di probabilità in più di essere assunti.
                    </p>
                  </Col>
                </Row>
                <Button
      className="me-2 buttonMyNetworkGrey"
      style={{
        border: "1px solid #666666",
        borderRadius: "20px",
        padding: "4px 16px",
        fontWeight: "600",
        color:  "#666666",
        backgroundColor: "white",
      }}
    >
      Quiz Valutazione competenze
    </Button>
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
        </Card>
      )}
    </>
  );
};
export default MySkillsQuizComponent;

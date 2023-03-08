import { Card, Row, Col } from "react-bootstrap";
import { ArrowRight, EyeFill } from "react-bootstrap-icons";
import MyButtonComponent from "./MyButtonComponent";

const MyActivitiesComponent = () => {
  return (
    <>
      <Card className="my-2 pt-3 pb-2 text-start">
        <Card.Body className="pb-0">
          <Row>
            <Col xs={12} md={4} className="d-flex">
              <Card.Title
                className="mb-0"
                style={{ fontSize: "1.2rem", alignSelf: "center" }}
              >
                {"Attività"}
              </Card.Title>
            </Col>
            <Col
              xs={12}
              md={4}
              className="offset-md-4 d-flex justify-content-md-end"
            >
              <MyButtonComponent text={"Avvia un post"} />
            </Col>
          </Row>
          <p
            className="text-primary"
            style={{ lineHeight: "0.8", fontSize: "0.9rem", fontWeight: "600" }}
          >
            0 follower
          </p>
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
                    É da un po' che non pubblichi qualcosa
                  </p>
                  <p className="mb-0" style={{ fontSize: "0.9rem" }}>
                    I post recenti che condividi o commenti appariranno qui
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
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
    </>
  );
};
export default MyActivitiesComponent;

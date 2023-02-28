import { Card, Row, Col, Button } from "react-bootstrap";
import { EyeFill, Pencil, PersonAdd, PlusLg } from "react-bootstrap-icons";
import { useState } from "react";
import MyButtonComponent from "./MyButtonComponent";

const MyPeopleCouldKnowComponent = () => {
  const [visible, setVisible] = useState(true);
  const usersList = [1, 2, 3, 4, 5];
  return (
    <>
      <Card className="my-2 pt-3 pb-3 text-start position-relative">
        <Card.Body className="pb-0">
          <Row>
            <Col xs={12}>
              <Card.Title
                className="mb-0"
                style={{ fontSize: "1.2rem", alignSelf: "center" }}
              >
                {"Persone che potresti conoscere"}
              </Card.Title>
            </Col>
          </Row>
          <Row>
            {usersList.map((element, index) => (
              <Row
                className="py-3"
                style={{ borderTop: index > 0 && "1px solid lightgrey" }}
              >
                <Col xs={3}>
                  <img
                    src="https://placekitten.com/200"
                    alt=""
                    style={{ width: "48px", borderRadius: "50%" }}
                  />
                </Col>
                <Col xs={9}>
                  <p className="mb-0" style={{ fontWeight: "600" }}>
                    Francesco Colapinto
                  </p>
                  <p style={{ fontSize: "0.9rem" }}>
                    Analist consultant - Junior developer
                  </p>
                  <MyButtonComponent
                    text={"collegati"}
                    textColor={"dimgrey"}
                    borderColor={"dimgrey"}
                  />
                </Col>
              </Row>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyPeopleCouldKnowComponent;

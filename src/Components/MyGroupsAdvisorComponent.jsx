import { Card, Row, Col, Button } from "react-bootstrap";
import { ArrowDown, ArrowRight, ArrowUp } from "react-bootstrap-icons";
import { useState } from "react";
import MyButtonComponent from "./MyButtonComponent";

const MyGroupAdvisorComponent = () => {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
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
                {"Gruppi che potrebbero interessarti"}
              </Card.Title>
            </Col>
          </Row>
          <Row>
            {usersList.map((element, index) => {
              return (
                <>
                  {show ? (
                    <Row
                      className="py-3"
                      style={{
                        borderTop: index > 0 && "1px solid lightgrey",
                      }}
                    >
                      <Col xs={3}>
                        <img
                          src="https://placekitten.com/200"
                          alt=""
                          style={{ width: "48px" }}
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
                  ) : (
                    index < 2 && (
                      <Row
                        className="py-3"
                        style={{
                          borderTop: index > 0 && "1px solid lightgrey",
                        }}
                      >
                        <Col xs={3}>
                          <img
                            src="https://placekitten.com/200"
                            alt=""
                            style={{ width: "48px" }}
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
                            text={"partecipa"}
                            textColor={"dimgrey"}
                            borderColor={"dimgrey"}
                          />
                        </Col>
                      </Row>
                    )
                  )}
                </>
              );
            })}
            <div
              className="text-center pt-2"
              style={{
                borderTop: "1px solid lightgrey",
                fontWeight: "600",
                color: "grey",
              }}
              onClick={() => {
                setShow(!show);
              }}
            >
              Mostra tutte le attività {show ? <ArrowUp /> : <ArrowDown />}
            </div>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyGroupAdvisorComponent;

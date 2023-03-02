import { Card, Row, Col } from "react-bootstrap";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import { useState } from "react";
import MyButtonComponent from "./MyButtonComponent";
import { useSelector } from "react-redux";

const MyGroupAdvisorComponent = () => {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
  const usersList = [1, 2, 3, 4, 5];
  const peopleArray = useSelector((state) => state.allProfiles.result);

  const randomizeContacts = (arr) => {
    let randomizedArr = [];
    while (randomizedArr.length < 6) {
      let randomGuy = arr[Math.trunc(Math.random() * arr?.length)];
      randomizedArr.push(randomGuy);
    }
    return randomizedArr;
  };

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
            {peopleArray &&
              randomizeContacts(peopleArray).map((element, index) => {
                return (
                  <>
                    {index < 6 && show ? (
                      <Row
                        className="py-3"
                        style={{
                          borderTop: index > 0 && "1px solid lightgrey",
                        }}
                      >
                        <Col xs={3}>
                          <img
                            src={element?.image || ""}
                            alt=""
                            style={{ width: "48px" }}
                          />
                        </Col>
                        <Col xs={9}>
                          <p className="mb-0" style={{ fontWeight: "600" }}>
                            {element?.name} {element?.surname}
                          </p>
                          <p style={{ fontSize: "0.9rem" }}>{element?.title}</p>
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
                              src={element?.image || ""}
                              alt=""
                              style={{ width: "48px" }}
                            />
                          </Col>
                          <Col xs={9}>
                            <p className="mb-0" style={{ fontWeight: "600" }}>
                              {element?.name} {element?.surname}
                            </p>
                            <p style={{ fontSize: "0.9rem" }}>
                              {element?.title}
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

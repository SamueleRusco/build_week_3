import { Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import MyButtonComponent from "./MyButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfileFetchAction } from "../Redux/Actions/allProfilesActions";

const MyPeopleCouldKnowComponent = () => {
  const key = useSelector((state) => state.profiles.bearer);
  const [visible, setVisible] = useState(true);
  const usersList = [1, 2, 3, 4, 5];
  const peopleArray = useSelector((state) => state.allProfiles.result);
  const dispatch = useDispatch();

  const randomizeContacts = (arr) => {
    let randomizedArr = [];
    while (randomizedArr.length < 6) {
      let randomGuy = arr[Math.trunc(Math.random() * arr?.length)];
      randomizedArr.push(randomGuy);
    }
    return randomizedArr;
  };

  useEffect(() => {
    dispatch(getAllProfileFetchAction(key));
  }, []);

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
            {peopleArray &&
              randomizeContacts(peopleArray).map((element, index) => {
                return (
                  index < 6 && (
                    <Row
                      className="py-3"
                      style={{ borderTop: index > 0 && "1px solid lightgrey" }}
                    >
                      <Col xs={3}>
                        <img
                          src={element?.image}
                          alt=""
                          style={{ width: "48px", borderRadius: "50%" }}
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
                  )
                );
              })}

            {/* {peopleArray && (
              <Row
                className="py-3"
                style={{ borderTop: "1px solid lightgrey" }}
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
                    {peopleArray && peopleArray?.[0].name} Colapinto
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
            )} */}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyPeopleCouldKnowComponent;

import { Card, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import MyButtonComponent from "./MyButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfileFetchAction } from "../Redux/Actions/allProfilesActions";
import { Link } from "react-router-dom";
import {
  friendsAdderAction,
  friendsRemoverAction,
} from "../Redux/Actions/friendsActions";

const MyPeopleCouldKnowComponent = ({ randomized }) => {
  const key = useSelector((state) => state.profiles.bearer);
  const [visible, setVisible] = useState(true);
  const usersList = [1, 2, 3, 4, 5];
  // const peopleArray = useSelector((state) => state.allProfiles.result);
  const friendIdList = useSelector((state) => state.friends.friendIdList);
  const dispatch = useDispatch();

  // const randomizeContacts = (arr) => {
  //   let randomizedArr = [];
  //   while (randomizedArr.length < 6) {
  //     let randomGuy = arr[Math.trunc(Math.random() * arr?.length)];
  //     randomizedArr.push(randomGuy);
  //   }

  //   return randomizedArr;
  // };

  // const randomized = randomizeContacts(peopleArray);

  // useEffect(() => {
  //   dispatch(getAllProfileFetchAction(key));
  // }, []);

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
            {randomized &&
              randomized?.map((element, index) => {
                return (
                  index < 6 && (
                    <Row
                      className="py-3"
                      style={{ borderTop: index > 0 && "1px solid lightgrey" }}
                    >
                      <Col xs={3}>
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={element?.image}
                            alt=""
                            style={{ width: "50px" }}
                          />
                        </div>
                      </Col>
                      <Col xs={9}>
                        <Link
                          to={`/profiles/${element?._id}`}
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          <p className="mb-0" style={{ fontWeight: "600" }}>
                            {element?.name} {element?.surname}
                          </p>
                        </Link>
                        <p style={{ fontSize: "0.9rem" }}>{element?.title}</p>
                        {!friendIdList.includes(element?._id) ? (
                          <Button
                            className="me-2"
                            style={{
                              border: "1px solid dimgrey",
                              borderRadius: "20px",
                              padding: "4px 16px",
                              fontWeight: "600",
                              color: "dimgrey",
                              backgroundColor: "white",
                            }}
                            onClick={() => {
                              dispatch(friendsAdderAction(element._id));
                            }}
                          >
                            collegati
                          </Button>
                        ) : (
                          <Button
                            className="me-2"
                            style={{
                              border: "1px solid rgb(0, 115, 177)",
                              borderRadius: "20px",
                              padding: "4px 16px",
                              fontWeight: "600",
                              color: "white",
                              backgroundColor: "rgb(0, 115, 177)",
                            }}
                            onClick={() => {
                              dispatch(friendsRemoverAction(element._id));
                            }}
                          >
                            collegato
                          </Button>
                        )}
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

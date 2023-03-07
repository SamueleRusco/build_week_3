import { useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../Redux/Actions";
import { useState } from "react";
import { CameraFill, Pencil } from "react-bootstrap-icons";
import MyButtonComponent from "./MyButtonComponent";
import MyProfileSettongsComponent from "./MyprofileSettingsCard";
import MyPeopleCouldKnowComponent from "./MyPeopleCouldKnowComponent";
import MyGroupAdvisorComponent from "./MyGroupsAdvisorComponent";
import { useParams } from "react-router-dom";

const UsersPage = () => {
  const profile = useSelector((state) => state.profiles.result);
  const key = useSelector((state) => state.profiles.bearer);
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.profiles.loading);
  const peopleArray = useSelector((state) => state.allProfiles.result);
  const params = useParams();

  const [sliderCounter, setSliderCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);
  console.log("sono params", params.usersId);

  return (
    <>
      <Container className="py-4" style={{ marginTop: "80px" }}>
        <Row>
          <Col xs={12} md={7} xl={7} className="offset-xl-1">
            {peopleArray &&
              peopleArray
                .filter((e) => e._id === params.usersId)
                .map((e) => (
                  <Card style={{ borderRadius: "10px" }}>
                    <div style={{ position: "relative" }}>
                      <div
                        variant="top"
                        style={{
                          height: "260px",
                          width: "100%",
                          backgroundImage: `url(${e.image})`,
                          backgroundSize: "cover",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          position: "relative",
                        }}
                      >
                        <div style={{ position: "absolute", bottom: "-12%" }}>
                          <div
                            style={{
                              height: "150px",
                              width: "150px",
                              borderRadius: "50%",
                              border: "1px solid grey",
                              overflow: "hidden",
                              position: "relative",

                              marginLeft: "20px",
                            }}
                          >
                            <img
                              src={e.image}
                              style={{
                                width: "170px",
                                position: "absolute",
                                right: "-15%",
                                top: "-15%",
                              }}
                            ></img>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="position-absolute position-relative
        pe-2"
                        style={{
                          height: "40px",
                          width: "40px",
                          borderRadius: "50%",
                          right: "4%",
                          top: "10%",
                          backgroundColor: "white",
                          border: "none",
                          color: "rgb(0, 115, 177)",
                          fontSize: "1.5rem",
                        }}
                      >
                        <CameraFill
                          className="position-absolute"
                          style={{ top: "22%", left: "22%" }}
                        />
                      </Button>
                    </div>

                    <Card.Body className="text-start pt-5 pb-4 position-relative">
                      <Card.Title
                        className="mt-2 mb-0"
                        style={{ fontSize: "1.7rem" }}
                      >
                        {e.name} {e.surname}
                      </Card.Title>
                      <p className="mb-0">{e.title}</p>
                      <p className="mb-0">
                        <span className="text-secondary">Username: </span>
                        {e.username}
                      </p>
                      <p
                        className="text-secondary"
                        style={{ fontSize: "14px" }}
                      >
                        indirizzo · {e.area}{" "}
                        <a
                          href="1"
                          style={{ textDecoration: "none", fontWeight: "600" }}
                        >
                          informazioni di contatto
                        </a>
                      </p>
                      <Button
                        className="position-absolute"
                        style={{
                          top: "3%",
                          right: "3%",
                          fontSize: "1.4rem",
                          backgroundColor: "white",
                          color: "grey",
                          border: "none",
                        }}
                        onClick={() => {
                          setShowModal(true);
                        }}
                      >
                        <Pencil />
                      </Button>
                      <div>
                        <MyButtonComponent
                          text="segui"
                          bgColor={"rgb(0, 115, 177)"}
                          textColor="white"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                ))}
          </Col>
          <Col
            xs={4}
            md={5}
            xl={3}
            className="d-none d-md-block"
            style={{ backgroundColor: "#f3f2ef" }}
          >
            <MyProfileSettongsComponent />
            <MyPeopleCouldKnowComponent />
            <MyGroupAdvisorComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UsersPage;

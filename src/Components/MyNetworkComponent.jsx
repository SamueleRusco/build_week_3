import { height } from "@mui/system";
import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  CalendarDate,
  FileBreak,
  Hash,
  JournalCheck,
  Newspaper,
  People,
  PeopleFill,
  PersonFill,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import MyFooterPart from "./MyFooterPart";
import MyNetworkPeople from "./MyNetworkPeople";

const MyNetworkComponent = () => {
  const friendIdList = useSelector((state) => state.friends.friendIdList);
  const peopleArray = useSelector((state) => state.allProfiles.result);

  const randomizeContacts = (arr) => {
    let randomizedArr = [];
    while (randomizedArr.length < 18) {
      let randomGuy = arr[Math.trunc(Math.random() * arr?.length)];
      randomizedArr.push(randomGuy);
    }

    return randomizedArr;
  };

  const randomized = randomizeContacts(peopleArray);

  useEffect(() => {
    console.log(friendIdList);
    console.log(randomized);
  });
  return (
    <Container
      className="mb-5"
      style={{ backgroundColor: "#f3f2ef", height: "90vh" }}
    >
      <Row className="mt-5">
        <Col xs={12} md={5} lg={3} className="mt-5 offset-xl-1">
          <Card className="p-0">
            <Card.Body>
              <h5 style={{ fontSize: "1rem", fontWeight: "400" }}>
                Gestisci la tua rete
              </h5>
              <p className="text-secondary">
                <PeopleFill className="me-2 mb-1" /> Collegamenti
              </p>
              <p className="text-secondary">
                <JournalCheck
                  className="me-2 mb-1"
                  style={{ color: "dimgrey" }}
                />
                Contatti
              </p>
              <p className="text-secondary">
                <PersonFill
                  className="me-2 mb-1"
                  style={{ color: "dimgrey" }}
                />
                Persone che segui e follower
              </p>
              <p className="text-secondary">
                <CalendarDate
                  className="me-2 mb-1"
                  style={{ color: "dimgrey" }}
                />
                Eventi
              </p>
              <p className="text-secondary">
                <FileBreak className="me-2 mb-1" style={{ color: "dimgrey" }} />
                Pagine
              </p>
              <p className="text-secondary">
                <Newspaper className="me-2 mb-1" style={{ color: "dimgrey" }} />
                Newsletter
              </p>
              <p className="text-secondary">
                <Hash style={{ color: "dimgrey" }} />
                Hashtag
              </p>
            </Card.Body>
            <div style={{ borderTop: "1px solid lightgrey" }}></div>
          </Card>
        </Col>
        <Col xs={12} md={7} lg={9} xl={7} className=" mt-5">
          <Card>
            <Card.Body>
              <h2 style={{ fontSize: "1.2rem" }}>
                Persone che potresti conoscere
              </h2>
              <MyNetworkPeople randomized={randomized} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <MyFooterPart />
    </Container>
  );
};

export default MyNetworkComponent;

import { RampRight } from "@mui/icons-material";
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
import styled from "styled-components";

import MyFooterHome from "./MyFooterHome";
import MyNetworkPeople from "./MyNetworkPeople";

const MyNetworkComponent = ({ randomized }) => {
  //   const peopleArray = useSelector((state) => state.allProfiles.result);

  //   const randomizeContacts = (arr) => {
  //     let randomizedArr = [];
  //     while (randomizedArr.length < 18) {
  //       let randomGuy = arr[Math.trunc(Math.random() * arr?.length)];
  //       randomizedArr.push(randomGuy);
  //     }

  //     return randomizedArr;
  //   };

  //   const randomized = randomizeContacts(peopleArray);

  return (
    <Container style={{ backgroundColor: "#f3f2ef" }}>
      <Row className="mt-5">
        <Col xs={12} md={5} lg={3} className="mt-5 offset-xl-1">
          <Card className="p-0">
            <Card.Body>
              <h5
                className="hMarginNetwork"
                style={{ fontSize: "1rem", fontWeight: "400" }}
              >
                Gestisci la tua rete
              </h5>
              <p className="text-secondary hoverNetwork">
                <PeopleFill className="me-2 mb-1" /> Collegamenti
              </p>
              <p className="text-secondary hoverNetwork">
                <JournalCheck
                  className="me-2 mb-1"
                  style={{ color: "dimgrey" }}
                />
                Contatti
              </p>
              <p className="text-secondary hoverNetwork">
                <PersonFill
                  className="me-2 mb-1"
                  style={{ color: "dimgrey" }}
                />
                Persone che segui e follower
              </p>
              <p className="text-secondary hoverNetwork">
                <CalendarDate
                  className="me-2 mb-1"
                  style={{ color: "dimgrey" }}
                />
                Eventi
              </p>
              <p className="text-secondary hoverNetwork">
                <FileBreak className="me-2 mb-1" style={{ color: "dimgrey" }} />
                Pagine
              </p>
              <p className="text-secondary hoverNetwork">
                <Newspaper className="me-2 mb-1" style={{ color: "dimgrey" }} />
                Newsletter
              </p>
              <p className="text-secondary hoverNetwork">
                <Hash style={{ color: "dimgrey" }} />
                Hashtag
              </p>
            </Card.Body>
            <div style={{ borderTop: "1px solid lightgrey" }}></div>
          </Card>
          <BannerCard className="fixed">
            <div>
              <img
                src="https://img.freepik.com/premium-psd/we-are-hiring-job-vacancy-web-banner-social-media-post-template_169307-1679.jpg?w=360"
                alt="OOOO"
              />
            </div>
          </BannerCard>

          <MyFooterHome />
        </Col>
        <Col xs={12} md={7} lg={9} xl={7} className=" mt-5">
          <Card>
            <Card.Body>
              <h2 className="mb-5" style={{ fontSize: "1.2rem" }}>
                Persone che potresti conoscere
              </h2>
              <MyNetworkPeople randomized={randomized} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const FollowCard = styled.div`
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;
const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default MyNetworkComponent;

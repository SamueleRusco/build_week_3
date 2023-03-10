import { Container, Row, Col, Button, Card } from "react-bootstrap";
import MyActivitiesComponent from "./MyActivitiesComponent";
import MyAnalisisComponent from "./MyAnalisisComponent";
import MyFormationComponent from "./MyFormationComponent";
import MyGroupAdvisorComponent from "./MyGroupsAdvisorComponent";
import MyInterestComponent from "./MyInterestComponent";
import MyPeopleCouldKnowComponent from "./MyPeopleCouldKnowComponent";
import MyProfileSettongsComponent from "./MyprofileSettingsCard";
import MyResourceComponent from "./MyResourceComponent";
import MySkillsQuizComponent from "./MySkillsQuizComponent";
import MyUserDetailsCard from "./MyUserDetailsCard";
import MyExperience from "./MyExperience";
import NewsWithFetch from "./NewsWithFetch";
import FavouriteJobsComponent from "./FavouriteJobsComponent";
import { borderSelectorActions } from "../Redux/Actions/borderSelectorAction";
import { useDispatch, useSelector } from "react-redux";
import MyFooterPart from "./MyFooterPart";
import { BriefcaseFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ME } from "../Redux/Actions/borderSelectorAction";
const MyMainComponent = () => {
  const peopleArray = useSelector((state) => state.allProfiles.result);
  const favouriteJobs = useSelector((state) => state.jobs.favouriteJobs);
  const dispatch = useDispatch();
  const randomizeContacts = (arr) => {
    let randomizedArr = [];
    while (randomizedArr.length < 6) {
      let randomGuy = arr[Math.trunc(Math.random() * arr?.length)];
      randomizedArr.push(randomGuy);
    }

    return randomizedArr;
  };

  const randomized = randomizeContacts(peopleArray);
  useEffect(() => {
    dispatch(borderSelectorActions(ME));
  });

  return (
    <Container className="py-4" style={{ marginTop: "80px", height: "100%" }}>
      <Row>
        <Col xs={12} md={7} xl={7} className="offset-xl-1">
          <MyUserDetailsCard />
          <MySkillsQuizComponent />
          <MyExperience />

          <MyAnalisisComponent />
          <MyResourceComponent />
          <MyActivitiesComponent />
          <MyFormationComponent />
          <MyInterestComponent />
          {/* <MyForm /> */}
        </Col>
        <Col
          xs={4}
          md={5}
          xl={3}
          className="d-none d-md-block"
          style={{ backgroundColor: "#f3f2ef" }}
        >
          <MyProfileSettongsComponent />
          <MyPeopleCouldKnowComponent randomized={randomized} />
          {/* <MyGroupAdvisorComponent /> */}
          {/* <FavouriteJobsComponent /> */}
          <Row className="py-3">
            <Card.Title
              className="mb-0"
              style={{ fontSize: "1.2rem", alignSelf: "center" }}
            >
              {"Lavori che ti interessano"}
            </Card.Title>
            {favouriteJobs &&
              favouriteJobs?.map((singleJob, index) => {
                return (
                  <div key={"ID: " + index} className="mb-2 mt-2">
                    <Card>
                      <Card.Body>
                        <h5 style={{ fontSize: "1.1rem" }}>
                          <a
                            alt="nulla"
                            href={singleJob.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none" }}
                          >
                            {singleJob?.title}
                          </a>
                        </h5>
                        <div className="d-flex">
                          <p>
                            {singleJob?.company_name}
                            <span>·</span>
                          </p>
                          <p>{singleJob?.candidate_required_location}</p>
                          <span>·</span>
                          <p>{singleJob?.publication_date?.substring(0, 10)}</p>
                        </div>
                        <p>
                          <BriefcaseFill className="me-2 mb-1 text-secondary" />
                          {singleJob?.job_type}
                        </p>
                        <div className="d-flex">
                          <div></div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </Row>
          <div>
            <Link
              to="/jobs"
              className="gButtonHover"
              style={{
                textDecoration: "none",
                border: "1px solid rgb(0, 115, 177)",
                borderRadius: "20px",
                padding: "4px 16px",
                fontWeight: "600",
                color: "rgb(0, 115, 177)",
                backgroundColor: "white",
              }}
            >
              Browse jobs
            </Link>
          </div>
        </Col>
      </Row>
      <MyFooterPart />
    </Container>
  );
};
export default MyMainComponent;

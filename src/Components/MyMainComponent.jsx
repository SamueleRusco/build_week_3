import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";
import MyActivitiesComponent from "./MyActivitiesComponent";
import MyAnalisisComponent from "./MyAnalisisComponent";
import MyFormationComponent from "./MyFormationComponent";
import MyInterestComponent from "./MyInterestComponent";
import MyPeopleCouldKnowComponent from "./MyPeopleCouldKnowComponent";
import MyProfileSettongsComponent from "./MyprofileSettingsCard";
import MyResourceComponent from "./MyResourceComponent";
import MySkillsQuizComponent from "./MySkillsQuizComponent";
import MyUserDetailsCard from "./MyUserDetailsCard";
import MyExperience from "./MyExperience";
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
    <Container className="py-4" style={{ marginTop: "70px", height: "100%" }}>
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
          {(peopleArray?.length === 0 && (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "100%", height: "100px" }}
            >
              <Spinner variant="primary" />
            </div>
          )) || <MyPeopleCouldKnowComponent randomized={randomized} />}
          <Row className="py-3 mt-3">
            <Card.Title
              className="mb-4 text-center"
              style={{ fontSize: "1.2rem", alignSelf: "center" }}
            >
              {"Lavori che ti interessano"}
            </Card.Title>
            {favouriteJobs &&
              favouriteJobs?.map((singleJob, index) => {
                return (
                  <div
                    key={"ID: " + index}
                    className={
                      index === favouriteJobs?.length - 1 ? "mb-0" : "mb-2"
                    }
                  >
                    <Card
                      style={{
                        border: "none",
                        borderRadius:
                          index === favouriteJobs?.length - 1 ? "8px" : "0px",
                        borderBottom:
                          index === favouriteJobs?.length - 1
                            ? "none"
                            : "1px solid lightgrey",
                      }}
                    >
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
                        <div>
                          <p className="mb-1">{singleJob?.company_name}</p>
                          <p className="mb-1">
                            {singleJob?.candidate_required_location}
                          </p>

                          <p className="mb-1">
                            {singleJob?.publication_date?.substring(0, 10)}
                          </p>
                        </div>
                        <p className="mb-1">
                          <BriefcaseFill className="me-2 mb-1 text-secondary" />
                          {singleJob?.job_type !== ""
                            ? singleJob?.job_type
                            : "Not specified"}
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

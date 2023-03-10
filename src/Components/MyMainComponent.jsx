import { Container, Row, Col } from "react-bootstrap";
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
import { useSelector } from "react-redux";
import MyFooterPart from "./MyFooterPart";
const MyMainComponent = () => {
  const peopleArray = useSelector((state) => state.allProfiles.result);

  const randomizeContacts = (arr) => {
    let randomizedArr = [];
    while (randomizedArr.length < 6) {
      let randomGuy = arr[Math.trunc(Math.random() * arr?.length)];
      randomizedArr.push(randomGuy);
    }

    return randomizedArr;
  };

  const randomized = randomizeContacts(peopleArray);

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
          <MyGroupAdvisorComponent />
        </Col>
      </Row>
      <MyFooterPart />
    </Container>
  );
};
export default MyMainComponent;

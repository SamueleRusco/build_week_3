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
import MyForm from "./MyForm";
const MyMainComponent = () => {
  return (
    <Container className="py-4" style={{ marginTop: "80px" }}>
      <Row>
        <Col xs={8} xl={7} className="offset-xl-1">
          <MyUserDetailsCard />
          <MySkillsQuizComponent />
          <MyAnalisisComponent />
          <MyResourceComponent />
          <MyActivitiesComponent />
          <MyFormationComponent />
          <MyInterestComponent />
          <MyForm />
        </Col>
        <Col xs={4} xl={3} style={{ backgroundColor: "#f3f2ef" }}>
          <MyProfileSettongsComponent />
          <MyPeopleCouldKnowComponent />
          <MyGroupAdvisorComponent />
        </Col>
      </Row>
    </Container>
  );
};
export default MyMainComponent;

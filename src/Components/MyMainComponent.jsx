import { Container, Row, Col } from "react-bootstrap";
import MyActivitiesComponent from "./MyActivitiesComponent";
import MyAnalisisComponent from "./MyAnalisisComponent";
import MyFormationComponent from "./MyFormationComponent";
import MyInterestComponent from "./MyInterestComponent";
import MyProfileSettongsComponent from "./MyprofileSettingsCard";
import MyResourceComponent from "./MyResourceComponent";
import MySkillsQuizComponent from "./MySkillsQuizComponent";
import MyUserDetailsCard from "./MyUserDetailsCard";

const MyMainComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs={8} xl={7} className="offset-xl-1">
          <MyUserDetailsCard />
          <MySkillsQuizComponent />
          <MyAnalisisComponent />
          <MyResourceComponent />
          <MyActivitiesComponent />
          <MyFormationComponent />
          <MyInterestComponent />
        </Col>
        <Col xs={4} xl={3} style={{ backgroundColor: "#f3f2ef" }}>
          <MyProfileSettongsComponent />
        </Col>
      </Row>
    </Container>
  );
};
export default MyMainComponent;

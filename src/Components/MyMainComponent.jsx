import { Container, Row, Col } from "react-bootstrap";
import MyAnalisisComponent from "./MyAnalisisComponent";
import MySkillsQuizComponent from "./MySkillsQuizComponent";
import MyUserDetailsCard from "./MyUserDetailsCard";
import MyForm from "./MyForm";
import MyExperience from "./MyExperience";
import MyExperienceForm from "./MyExperienceForm";
import Notizie from "./Notizie";
import NewPost from "./NewPost";
const MyMainComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs={8} xl={7} className="offset-xl-1"></Col>
        <Col xs={4} xl={3} className="bg-danger "></Col>
      </Row>
    </Container>
  );
};
export default MyMainComponent;

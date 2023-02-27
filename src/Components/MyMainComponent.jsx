import { Container, Row, Col } from "react-bootstrap";
import MyUserDetailsCard from "./MyUserDetailsCard";

const MyMainComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs={8} xl={7} className="offset-xl-1">
          <MyUserDetailsCard />
        </Col>
        <Col xs={4} xl={3} className="bg-danger "></Col>
      </Row>
    </Container>
  );
};
export default MyMainComponent;

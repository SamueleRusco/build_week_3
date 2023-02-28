import { Container, Row, Col, Image, Form } from "react-bootstrap";



const MyFooterPart = () => {
  return (
    <Container style= {{backgroundColor: 'red'}} id="footer" className="">
      <Row className="pl-3 pb-2 mt-5">
        <Image src="../images/promoted/linkedinADS.png" alt="linkedin logo" />
      </Row>
      <Row>
        <Col xs={12} md={10}>
          <Row>
            <div className="mr-3">
              <Col xs={12} md={6} lg={3}>
                <a href=""> Infromazioni </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Linee guida della community</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Privacy e condizioni</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> sales solutions </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Centro sicurezza</a>
              </Col>
            </div>
            <div className="mr-3">
              <Col xs={12} md={6} lg={3}>
                <a href=""> Accessibilità </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> Carriera</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> Opzioni di annuncio </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Mobile </a>
              </Col>
            </div>
            <div className="mr-3">
              <Col xs={12} md={6} lg={3}>
                <a href=""> talent solutions </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> Soluzioni di Marketing </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> Pubblicità </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href=""> Piccole imprese </a>
              </Col>
            </div>
            <div id="footer-settings" className="mr-3">
              <Col xs={12} md={6} lg={3} className="d-flex flex-row">
                <i class="bi bi-question-circle-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href=""> Domande? </a>
                  <p> Visita il nostro centro assistenza </p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3} className="d-flex flex-row">
                <i class="bi bi-gear-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href=""> Gestisci il tuo account e la tua privacy </a>
                  <p> Vai alle impostazioni </p>
                </div>
              </Col>
            </div>
            <div>
              <Col xs={12} md={6} lg={3}>
                <Form>
                  <Form.Group controlId="languages">
                    <Form.Label>Seleziona Lingua</Form.Label>
                    <Form.Control as="select">
                      <option>Inglese</option>
                      <option>Italiano</option>
                      <option>Russo</option>
                      <option>Francese</option>
                      <option>Tedesco</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <p>linkedin corporation &copy; {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  );
};


/*gdgd*/



export default MyFooterPart;
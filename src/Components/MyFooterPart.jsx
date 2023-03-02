import { Container, Row, Col, Image, Form } from "react-bootstrap";

const MyFooterPart = () => {
  return (
    <Container id="footer" className="">
      <Row className="pl-3 pb-2 mt-5 footerRow">
        <Image src="../images/promoted/linkedinADS.png" alt="linkedin logo" />
      </Row>

      <Row className="footerRow">
        <Col xs={12} md={10}>
          <Row className="footerRow">
            <div className="mr-3">
              <Col>
                <a href=""> Infromazioni </a>
              </Col>
              <Col>
                <a href="">Linee guida della community</a>
              </Col>
              <Col>
                <a href="">Privacy e condizioni</a>
              </Col>
              <Col>
                <a href=""> sales solutions </a>
              </Col>
              <Col>
                <a href="">Centro sicurezza</a>
              </Col>
            </div>
            <div className="mr-3">
              <Col>
                <a href=""> Accessibilità </a>
              </Col>
              <Col>
                <a href=""> Carriera</a>
              </Col>
              <Col>
                <a href=""> Opzioni di annuncio </a>
              </Col>
              <Col>
                <a href="">Mobile </a>
              </Col>
            </div>
            <div className="mr-3">
              <Col>
                <a href=""> talent solutions </a>
              </Col>
              <Col>
                <a href=""> Soluzioni di Marketing </a>
              </Col>
              <Col>
                <a href=""> Pubblicità </a>
              </Col>
              <Col>
                <a href=""> Piccole imprese </a>
              </Col>
            </div>
            <div id="footer-settings" className="mr-3">
              <Col className="d-flex flex-row">
                <i className="bi bi-question-circle-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href=""> Domande? </a>
                  <p> Visita il nostro centro assistenza </p>
                </div>
              </Col>
              <Col className="d-flex flex-row">
                <i className="bi bi-gear-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href=""> Gestisci il tuo account e la tua privacy </a>
                  <p> Vai alle impostazioni </p>
                </div>
              </Col>
            </div>
            <div>
              <Col>
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
      <Row className="footerRow">
        <Col className="mt-4">
          <p>linkedin corporation &copy; {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  );
};

/*gdgd*/

export default MyFooterPart;

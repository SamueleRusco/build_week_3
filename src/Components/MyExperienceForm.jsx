import { useState } from "react";
import { Form, Button, Row, Col, Collapse } from "react-bootstrap";
import { Plus, PlusLg, XLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const MyExperienceForm = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && (
        <Form>
          <hr />
          <Form.Group controlId="formQualifica">
            <Form.Text className="text-muted">Qualifica</Form.Text>
            <Form.Control
              type="text"
              placeholder="Esempio: Teaching assistant"
            />
          </Form.Group>
          <Form.Text className="text-muted">Tipo di impiego</Form.Text>
          <Form.Group controlId="workOptions">
            <Form.Control
              style={{
                border: "1px solid lightgrey",
                top: "10%",
                right: "3%",
                width: "100%",
                color: "gray",
                textAlign: "start",
              }}
              placeholder="Seleziona"
              as="select"
            >
              <option value="Seleziona">Seleziona</option>
              <option value="Tempo pieno">Tempo pieno</option>
              <option value="Part-time">Part-time</option>
              <option value="Autonomo">Autonomo</option>
              <option value="Freelance">Freelance</option>
              <option value="A contratto">A contratto</option>
              <option value="Stage">Stage</option>
              <option value="Apprendistato">Apprendistato</option>
              <option value="Stagionale">Stagionale</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formAzienda">
            <Form.Text className="text-muted">Nome Azienda</Form.Text>
            <Form.Control type="text" placeholder="Esempio: Epicode" />
          </Form.Group>
          <Form.Group controlId="formLocalità">
            <Form.Text className="text-muted">Località</Form.Text>
            <Form.Control type="text" placeholder="Esempio: Milano, Italia" />
          </Form.Group>
          <Form.Group controlId="workOptions2">
            <Form.Control
              style={{
                border: "1px solid lightgrey",
                top: "10%",
                right: "3%",
                width: "100%",
                color: "gray",
                textAlign: "start",
              }}
              as="select"
            >
              <option value="Seleziona">Seleziona</option>
              <option value="Tempo pieno">Tempo pieno</option>
              <option value="Part-time">Part-time</option>
              <option value="Autonomo">Autonomo</option>
            </Form.Control>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                variant="success"
                label="Attualmente ricopro questo ruolo"
              />
            </Form.Group>
          </Form.Group>
          <Row>
            <Col>
              <Form.Text className="text-muted">Data di inizio</Form.Text>
              <Form.Group className="active" controlId="formDatePickerStart">
                <input type="date" id="dateStandardStart" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Text className="text-muted">Data di fine</Form.Text>
              <Form.Group className="active" controlId="formDatePickerEnd">
                <input type="date" id="dateStandardEnd" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formQualifica">
            <Form.Text className="text-muted">Settore</Form.Text>
            <Form.Control
              type="text"
              placeholder="Servizio IT e consulenza IT"
            />
            <Form.Text className="text-muted">
              LinkedIn utilizza le informazioni sul settore per fornire
              segnalazioni più pertinenti
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          <Form.Group controlId="formSommario">
            <Form.Text className="text-muted">Sommario del profilo</Form.Text>
            <Form.Control type="text" />
            <Form.Text className="text-muted">
              Compare sotto il tuo nome nella parte superiore del profilo
            </Form.Text>
          </Form.Group>

          <h4>Competenze</h4>
          <Form.Text>
            Ti consigliamo di aggiungere le 5 competenze più utilizzate in
            questo ruolo.
          </Form.Text>
          <div>
            <Button //ci andrà onClick per mostrare inputfield delle competenze
              style={{
                borderRadius: "25px",
              }}
              variant="outline-primary"
            >
              <PlusLg /> Aggiungi competenza
            </Button>
          </div>

          <h4>Media</h4>
          <Form.Text className="text-muted">
            Aggiungi o inserisci un link a documenti, foto, siti, presentazioni
            e video esterni.
          </Form.Text>
          <div>
            <Button // ci andrà onclick per caricare link media
              style={{
                borderRadius: "20px",
              }}
              variant="outline-primary"
            >
              <PlusLg /> Aggiungi media
            </Button>
          </div>

          <Button
            className=" position-absolute bg-transparent p-0"
            style={{
              border: "none",
              top: "10%",
              right: "3%",
            }}
          >
            <XLg
              className="text-dark"
              onClick={() => {
                setVisible(!visible);
              }}
            />
          </Button>
        </Form>
      )}
      <Button
        className=" position-absolute bg-transparent p-0"
        style={{
          border: "none",
          top: "10%",
          right: "3%",
          color: "black",
        }}
      >
        click qui per modale
        <XLg
          className="text-dark"
          onClick={() => {
            setVisible(!visible);
          }}
        />
      </Button>
    </>
  );
};

export default MyExperienceForm;

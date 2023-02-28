import { useState } from "react";
import { Form, Button, Dropdown, FormLabel } from "react-bootstrap";
import { EyeFill, XLg } from "react-bootstrap-icons";

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
          </Form.Group>

          {/* <Dropdown>
            <Dropdown.Toggle
              variant="white"
              id="dropdown-basic"
              style={{
                border: "1px solid lightgrey",
                top: "10%",
                right: "3%",
                width: "100%",
                color: "gray",
                textAlign: "start",
              }}
            >
              <FormLabel></FormLabel>
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                width: "100%",
              }}
            >
              
            </Dropdown.Menu>
          </Dropdown> */}

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

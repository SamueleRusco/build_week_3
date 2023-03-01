import { Form, Button, Row, Col, Collapse, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";

const MyEditExperiencesModal = ({ id }) => {
  const [editModalOn, setEditModalOn] = useState(false);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/63fc659cf193e60013807f4d/experiences/${id}`;
  console.log("sono basePoint", id);
  const editModalFetch = async () => {
    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    let response = await fetch(baseEndpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: key },
      body: JSON.stringify({
        role: role,
        company: company,
        startDate: startDate,
        endDate: endDate,
        description: description,
        area: area,
      }),
    });
    let data = await response.json();
    console.log("sono edit", data);
    console.log("sono basePoint", id);
  };
  const deleteModalFetch = async () => {
    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    let response = await fetch(baseEndpoint, {
      method: "DELETE",
      headers: { Authorization: key },
    });
    let data = await response.json();
    console.log("sono edit", data);
  };

  return (
    <>
      <Button
        onClick={() => {
          setEditModalOn(true);
        }}
      >
        Edit
      </Button>
      <Modal
        show={editModalOn}
        onHide={() => setEditModalOn(false)}
        dialogClassName="modal-90w"
      >
        <Form className="p-3">
          <Button
            onClick={() => {
              setEditModalOn(false);
            }}
          >
            Chiudi
          </Button>
          <hr />
          <Form.Group className="mb-4" controlId="formQualifica">
            <Form.Text className="text-muted">Qualifica</Form.Text>
            <Form.Control
              type="text"
              placeholder="Esempio: Teaching assistant"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formAzienda">
            <Form.Text className="text-muted">Nome Azienda</Form.Text>
            <Form.Control
              type="text"
              placeholder="Esempio: Epicode"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formLocalità">
            <Form.Text className="text-muted">Località</Form.Text>
            <Form.Control
              type="text"
              placeholder="Esempio: Milano, Italia"
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
              }}
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group
                className="active mb-4"
                controlId="formDatePickerStart"
              >
                <Form.Text className="text-muted">Data di inizio</Form.Text>
                <input
                  type="date"
                  id="dateStandardStart"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="active mb-4" controlId="formDatePickerEnd">
                <Form.Text className="text-muted">Data di fine</Form.Text>
                <input
                  type="date"
                  id="dateStandardEnd"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            className="me-2"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              //   postExperienceFetch();
              editModalFetch();
              setEditModalOn(false);
            }}
          >
            Invia
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              //   postExperienceFetch();
              deleteModalFetch();
              setEditModalOn(false);
            }}
          >
            Elimina
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default MyEditExperiencesModal;

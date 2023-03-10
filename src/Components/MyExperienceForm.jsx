import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
const MyExperienceForm = ({ showModal, setShowModal, refresh }) => {
  const [refreshed, setRefreshed] = useState(false);
  const [fd, setFd] = useState(new FormData());
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const profileID = useSelector((state) => state.profiles.result._id);
  const key = useSelector((state) => state.profiles.bearer);

  const postExperienceFetch = async () => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${profileID}/experiences`;
    let response = await fetch(baseEndpoint, {
      method: "POST",
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
    let experienceId = data._id;

    await fetch(baseEndpoint + "/" + experienceId + "/picture", {
      method: "POST",
      headers: { Authorization: key },
      body: fd,
    });
  };
  const handleFile = (ev) => {
    setFd((prev) => {
      prev.delete("experience");
      prev.append("experience", ev.target.files[0]);
      return prev;
    });
  };
  useEffect(() => {
    setRefreshed(false);
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshed]);

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
      >
        <Form className="p-3">
          <Button
            onClick={() => {
              setShowModal(false);
            }}
          >
            Chiudi
          </Button>
          <div className="text-center mt-3">
            <h5 style={{ fontSize: "1rem" }}>
              Per aggiungere un'esperienza compila tutti i campi
            </h5>
          </div>

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
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Aggiungi un`immagine</Form.Label>
            <Form.Control
              onChange={handleFile}
              type="file"
              placeholder="Aggiungi un`immagine"
            />
          </Form.Group>
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (
                role === "" ||
                company === "" ||
                startDate === "" ||
                endDate === "" ||
                description === "" ||
                area === ""
              ) {
                alert("per favore compila tutti i campi prima di proseguire");
              } else {
                postExperienceFetch();
                setShowModal(false);
                setRefreshed(true);
              }
            }}
          >
            Invia
          </Button>
        </Form>
      </Modal>
    </>
  );
};
export default MyExperienceForm;

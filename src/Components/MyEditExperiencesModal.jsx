import { Form, Button, Row, Col, Collapse, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { PencilFill } from "react-bootstrap-icons";
import { putExperienceImg } from "../Redux/Actions/putProfileImg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MyEditExperiencesModal = ({ id, refresh }) => {
  const profileID = useSelector((state) => state.profiles.result._id);
  const dispatch = useDispatch();
  const [fd, setFd] = useState(new FormData());
  const [refreshed, setRefreshed] = useState(false);
  const [editModalOn, setEditModalOn] = useState(false);
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${profileID}/experiences/${id}`;

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
    // let data = await response.json();
  };
  const deleteModalFetch = async () => {
    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    let response = await fetch(baseEndpoint, {
      method: "DELETE",
      headers: { Authorization: key },
    });
    // let data = await response.json();
  };

  useEffect(() => {
    refresh();
    setRefreshed(false);
  }, [refreshed]);

  const handleFile = (ev) => {
    setFd((prev) => {
      //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
      prev.delete("experience"); //ricordatevi di svuotare il FormData prima :)
      prev.append("experience", ev.target.files[0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return prev;
    });
  };
  return (
    <>
      <Button
        style={{ backgroundColor: "white", color: "grey", border: "none" }}
        onClick={() => {
          setEditModalOn(true);
        }}
      >
        <PencilFill />
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
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Aggiungi Immagine all`esperienza</Form.Label>
            <Form.Control
              className="mb-5"
              type="file"
              placeholder="Enter Area"
              onChange={handleFile}
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
              setRefreshed(!refreshed);
              dispatch(putExperienceImg(fd, id, profileID));
              console.log("id esperienza " + id);
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
              setRefreshed(!refreshed);
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

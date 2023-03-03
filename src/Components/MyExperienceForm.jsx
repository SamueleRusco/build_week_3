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

  const postExperienceFetch = async () => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${profileID}/experience`;

    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
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
    console.log(baseEndpoint + "/" + experienceId + "/picture");
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

// const MyExperienceForm = ({ showModal, setShowModal }) => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <>
//       <Modal
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         dialogClassName="modal-90w"
//       >
//         <Form className="p-3">
//           <Button
//             onClick={() => {
//               setShowModal(false);
//             }}
//           >
//             Chiudi
//           </Button>
//           <hr />
//           <Form.Group className="mb-4" controlId="formQualifica">
//             <Form.Text className="text-muted">Qualifica</Form.Text>
//             <Form.Control
//               type="text"
//               placeholder="Esempio: Teaching assistant"
//               onChange={(e) => {}}
//             />
//           </Form.Group>
//           {/* <Form.Group className="mb-4" controlId="workOptions">
//             <Form.Text className="text-muted">Tipo di impiego</Form.Text>
//             <Form.Control
//               style={{
//                 border: "1px solid lightgrey",
//                 top: "10%",
//                 right: "3%",
//                 width: "100%",
//                 color: "gray",
//                 textAlign: "start",
//               }}
//               placeholder="Seleziona"
//               as="select"
//             >
//               <option value="Seleziona">Seleziona</option>
//               <option value="Tempo pieno">Tempo pieno</option>
//               <option value="Part-time">Part-time</option>
//               <option value="Autonomo">Autonomo</option>
//               <option value="Freelance">Freelance</option>
//               <option value="A contratto">A contratto</option>
//               <option value="Stage">Stage</option>
//               <option value="Apprendistato">Apprendistato</option>
//               <option value="Stagionale">Stagionale</option>
//             </Form.Control>
//           </Form.Group> */}
//           <Form.Group className="mb-4" controlId="formAzienda">
//             <Form.Text className="text-muted">Nome Azienda</Form.Text>
//             <Form.Control type="text" placeholder="Esempio: Epicode" />
//           </Form.Group>
//           <Form.Group className="mb-4" controlId="formLocalità">
//             <Form.Text className="text-muted">Località</Form.Text>
//             <Form.Control type="text" placeholder="Esempio: Milano, Italia" />
//           </Form.Group>
//           {/* <Form.Group className="mb-4" controlId="workOptions2">
//             <Form.Control
//               style={{
//                 border: "1px solid lightgrey",
//                 top: "10%",
//                 right: "3%",
//                 width: "100%",
//                 color: "gray",
//                 textAlign: "start",
//               }}
//               as="select"
//             >
//               <option value="Seleziona">Seleziona</option>
//               <option value="Tempo pieno">Tempo pieno</option>
//               <option value="Part-time">Part-time</option>
//               <option value="Autonomo">Autonomo</option>
//             </Form.Control>

//             <Form.Group className="mb-4" controlId="formBasicCheckbox">
//               <Form.Check
//                 type="checkbox"
//                 variant="success"
//                 label="Attualmente ricopro questo ruolo"
//               />
//             </Form.Group>
//           </Form.Group> */}
//           <Row>
//             <Col>
//               <Form.Group
//                 className="active mb-4"
//                 controlId="formDatePickerStart"
//               >
//                 <Form.Text className="text-muted">Data di inizio</Form.Text>
//                 <input type="date" id="dateStandardStart" />
//               </Form.Group>
//             </Col>
//             <Col>
//               <Form.Group className="active mb-4" controlId="formDatePickerEnd">
//                 <Form.Text className="text-muted">Data di fine</Form.Text>
//                 <input type="date" id="dateStandardEnd" />
//               </Form.Group>
//             </Col>
//           </Row>
//           {/* <Form.Group className="mb-4" controlId="formQualifica">
//             <Form.Text className="text-muted">Settore</Form.Text>
//             <Form.Control
//               type="text"
//               placeholder="Servizio IT e consulenza IT"
//             />
//             <Form.Text className="text-muted">
//               LinkedIn utilizza le informazioni sul settore per fornire
//               segnalazioni più pertinenti
//             </Form.Text>
//           </Form.Group> */}
//           <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Descrizione</Form.Label>
//             <Form.Control as="textarea" />
//           </Form.Group>
//           {/* <Form.Group className="mb-4" controlId="formSommario">
//             <Form.Text className="text-muted">Sommario del profilo</Form.Text>
//             <Form.Control type="text" />
//             <Form.Text className="text-muted">
//               Compare sotto il tuo nome nella parte superiore del profilo
//             </Form.Text>
//           </Form.Group> */}

//           {/* <h4>Competenze</h4> */}
//           {/* <Form.Text>
//             Ti consigliamo di aggiungere le 5 competenze più utilizzate in
//             questo ruolo.
//           </Form.Text> */}
//           {/* <div className="pt-4 mb-4">
//             <Button //ci andrà onClick per mostrare inputfield delle competenze
//               style={{
//                 borderRadius: "25px",
//               }}
//               variant="outline-primary"
//             >
//               <PlusLg /> Aggiungi competenza
//             </Button>
//           </div> */}

//           {/* <h4>Media</h4>
//           <Form.Text className="text-muted">
//             Aggiungi o inserisci un link a documenti, foto, siti, presentazioni
//             e video esterni.
//           </Form.Text>
//           <div className="pt-4">
//             <Button // ci andrà onclick per caricare link media
//               style={{
//                 borderRadius: "20px",
//               }}
//               variant="outline-primary"
//             >
//               <PlusLg /> Aggiungi media
//             </Button>
//           </div> */}
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default MyExperienceForm;

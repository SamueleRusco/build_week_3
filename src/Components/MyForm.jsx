import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getProfileAction } from "../Redux/Actions";
import { putProfileImg } from "../Redux/Actions/putProfileImg";
import { useSelector } from "react-redux";
import { SendFill, XLg } from "react-bootstrap-icons";
const MyForm = ({ showModal, setShowModal }) => {
  const profileID = useSelector((state) => state.profiles.result._id);
  const datiProfilo = useSelector((state) => state.profiles.result);
  const [fd, setFd] = useState(new FormData());
  const [refreshed, setRefreshed] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState(datiProfilo.name);
  const [surname, setSurname] = useState(datiProfilo.surname);
  const [email, setEmail] = useState(datiProfilo.email);
  const [username, setUsername] = useState(datiProfilo.username);
  const [title, setTitle] = useState(datiProfilo.title);
  const [bio, setBio] = useState(datiProfilo.bio);
  const [area, setArea] = useState(datiProfilo.area);
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile";
  const key = useSelector((state) => state.profiles.bearer);

  const putProfileFetch = async () => {
    let response = await fetch(baseEndpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: key },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        username: username,
        title: title,
        bio: bio,
        area: area,
      }),
    });
    await response.json();
  };

  useEffect(() => {
    setRefreshed(false);
    dispatch(getProfileAction(key));
  }, [refreshed]);

  const handleFile = (ev) => {
    setFd((prev) => {
      prev.delete("profile");
      prev.append("profile", ev.target.files[0]);
      return prev;
    });
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
      >
        <Form className="p-3">
          <div
            className="text-center py-3 px-3 mb-4"
            style={{ borderBottom: "1px solid lightgrey" }}
          >
            <h5 style={{ fontSize: "1rem" }}>
              Inserisci i dati che vuoi modificare
            </h5>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="mb-4"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="input"
              placeholder="Enter Name"
            />

            <Form.Label>Surname</Form.Label>
            <Form.Control
              className="mb-4"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              type="input"
              placeholder="Enter Surname"
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Label>Username</Form.Label>
            <Form.Control
              className="mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="input"
              placeholder="Enter Username"
            />
            <Form.Label>Title</Form.Label>
            <Form.Control
              className="mb-4"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="input"
              placeholder="enter position"
            />
            <Form.Label>Bio</Form.Label>
            <Form.Control
              className="mb-4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              type="input"
              placeholder="Enter short Bio"
            />
            <Form.Label>Area</Form.Label>
            <Form.Control
              className="mb-5"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              type="input"
              placeholder="Enter Area"
            />
            <Form.Label>Modifica la tua immagine profilo</Form.Label>
            <Form.Control
              className="mb-5"
              type="file"
              placeholder="Enter Area"
              onChange={handleFile}
            />
          </Form.Group>
          <Button
            className="me-2 bg-transparent commentHover px-0"
            style={{
              border: "none",
              borderRadius: "3px",
              color: "dimgrey",
              fontWeight: "500",
              fontSize: "0.9rem",
              width: "100%",
            }}
            onClick={(e) => {
              e.preventDefault();
              if (
                name === "" ||
                surname === "" ||
                email === "" ||
                username === "" ||
                bio === "" ||
                title === "" ||
                area === ""
              ) {
                alert("Per favore compila tutti i campi");
              } else {
                putProfileFetch();
                dispatch(putProfileImg(fd, profileID, key));
                setRefreshed(true);
                setShowModal(false);
              }
            }}
            variant="primary"
            type="submit"
          >
            <SendFill
              className="mb-1 me-1"
              style={{ fontSize: "1.3rem", fontWeight: "600" }}
            />
            Invia
          </Button>
          <Button
            className="me-2 bg-transparent commentHover px-0"
            style={{
              border: "none",
              borderRadius: "3px",
              color: "dimgrey",
              fontWeight: "500",
              fontSize: "0.9rem",
              width: "100%",
            }}
            onClick={() => {
              setShowModal(false);
            }}
          >
            <XLg className="mb-1 me-1" />
            Chiudi
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default MyForm;

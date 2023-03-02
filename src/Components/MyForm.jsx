import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getProfileAction } from "../Redux/Actions";

const MyForm = ({ showModal, setShowModal }) => {
  const [refreshed, setRefreshed] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [area, setArea] = useState("");
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile";

  let user = {
    name,
    surname,
    email,
    username,
    title,
    bio,
    area,
  };
  const putProfileFetch = async () => {
    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    let response = await fetch(baseEndpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: key },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        // username: username,
        title: title,
        bio: bio,
        area: area,
      }),
      // body: JSON.stringify(user)
    });
    let data = await response.json();
    console.log("sono put", data);
  };

  useEffect(() => {
    setRefreshed(false);
    dispatch(getProfileAction());
  }, [refreshed]);

  // {
  //   _id: "5fc4ae95b708c200175de88d",
  //   name: "Ari",
  //   surname: "Razab",
  //   email: "arianrazab@yahoo.com",
  //   username: "AriiMe",
  //   title: "Software Developer",
  //   bio: "yeeeeet",
  //   area: "Frankfurt am main",
  //   image:
  //     "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
  //   createdAt: "2020-11-30T08:34:29.820Z",
  //   updatedAt: "2020-11-30T08:34:29.820Z",
  //   __v: 0,
  // }

  // useEffect(() => {
  //   putProfileFetch();
  // }, []);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   putProfileFetch();
  // };

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
            {/* <Form.Label>Username</Form.Label>
            <Form.Control
              className="mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="input"
              placeholder="Enter Username"
            /> */}
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
          </Form.Group>
          <Button
            className="me-2"
            onClick={(e) => {
              e.preventDefault();
              if (
                false
                // name === "" ||
                // surname ||
                // email === "" ||
                // username === "" ||
                // bio === "" ||
                // title === "" ||
                // area === ""
              ) {
                alert("Per favore compila tutti i campi");
              } else {
                putProfileFetch();
                setRefreshed(true);
                setShowModal(false);
              }
            }}
            variant="primary"
            type="submit"
          >
            Invia
          </Button>
          <Button
            onClick={() => {
              setShowModal(false);
            }}
          >
            Chiudi
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default MyForm;

import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const MyForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [area, setArea] = useState("");

  const putProfileFetch = () => {};

  useEffect(() => {
    putProfileFetch();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    putProfileFetch();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="input"
          placeholder="Enter Name"
        />

        <Form.Label>Surname</Form.Label>
        <Form.Control
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="input"
          placeholder="Enter Surname"
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <Form.Label>Username</Form.Label>
        <Form.Control
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="input"
          placeholder="Enter Username"
        />
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="input"
          placeholder="enter position"
        />
        <Form.Label>Bio</Form.Label>
        <Form.Control
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          type="input"
          placeholder="Enter short Bio"
        />
        <Form.Label>Area</Form.Label>
        <Form.Control
          value={area}
          onChange={(e) => setArea(e.target.value)}
          type="input"
          placeholder="Enter Area"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;

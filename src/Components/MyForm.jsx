import { async } from "q";
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
        username: username,
        // title: title,
        bio: bio,
        area: area,
      }),
    });
    let data = await response.json();
    console.log("sono put", data);
  };

  useEffect(() => {}, [name]);

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
    <Form>
      {/* <Form> */}
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
          type="input"
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
      <Button
        onClick={(e) => {
          e.preventDefault();
          putProfileFetch();
        }}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;

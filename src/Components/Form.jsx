import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  /*   const handleSubmit = async (e) => {
    e.preventDefault();
    putProfileFetch();
  }; */

  return (
    <Form /* onSubmit={handleSubmit} */>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="input" placeholder="Enter Name" />
        <Form.Label>Surname</Form.Label>
        <Form.Control type="input" placeholder="Enter Surname" />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Label>Username</Form.Label>
        <Form.Control type="input" placeholder="Enter Username" />
        <Form.Label>Title</Form.Label>
        <Form.Control type="input" placeholder="enter position" />
        <Form.Label>Bio</Form.Label>
        <Form.Control type="input" placeholder="Enter short Bio" />
        <Form.Label>area</Form.Label>
        <Form.Control type="input" placeholder="Enter area" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;

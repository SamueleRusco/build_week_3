import { useState } from "react";
import { Button, Form, FormControl, FormLabel, Modal } from "react-bootstrap";

const NewPost = ({ showModal, setShowModal }) => {
  const [text, setText] = useState("");
  const [fd, setFd] = useState(new FormData());
  const url = "https://striveschool-api.herokuapp.com/api/posts/";

  const postExperienceFetch = async () => {
    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: key },
      body: JSON.stringify({
        // cambio con quello che mi serve
        text: text,
      }),
    });
    let data = await response.json();
    console.log("text", text);
  };

  return (
    <>
      {/* <Button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show Modal
      </Button> */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
      >
        <Form style={{ height: "270px" }}>
          <Form.Group>
            <FormLabel>Crea un post</FormLabel>
            <Button style={{ marginLeft: "370px", color: "black", fontWeight: "500" }}onClick={(e) => setShowModal(false)} variant="danger">
            X
          </Button>
            <FormControl
              style={{ height: "195px", border: "none" }}
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="input"
              placeholder="Di cosa vorresti parlare?"
            ></FormControl>
          </Form.Group>
          
          
          <Button style={{ marginLeft: "407px", color: "black", fontWeight: "500" }}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              postExperienceFetch();
              setShowModal(false);
            }}
          >
            Pubblica
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default NewPost;



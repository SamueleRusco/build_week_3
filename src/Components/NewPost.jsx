import { useState } from "react";
import { Button, Form, FormControl, FormLabel, Modal } from "react-bootstrap";

const NewPost = ({ showModal, setShowModal }) => {
  const [text, setText] = useState("");
  const url = "https://striveschool-api.herokuapp.com/api/posts/";

  console.log(text);

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
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      dialogClassName="modal-90w"
    >
      <Form>
        <Form.Group>
          <FormLabel>scrivi il tuo post</FormLabel>
          <FormControl
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="input"
            placeholder="scrivi qualcosa"
          ></FormControl>
        </Form.Group>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            postExperienceFetch();
          }}
        >
          post
        </Button>
        <Button onClick={(e) => setShowModal(false)} variant="danger">
          Annulla
        </Button>
      </Form>
    </Modal>
  );
};

export default NewPost;

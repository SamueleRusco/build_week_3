import { useState } from "react";
import { Button, Form, FormControl, FormLabel, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const NewPost = ({ showModal, setShowModal }) => {
  const [text, setText] = useState("");
  const [fd, setFd] = useState(new FormData());
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const key = useSelector((state) => state.profiles.bearer);
  const [refreshed, setRefreshed] = useState(false);
  useEffect(() => {
    postNewCommentFetch();
  }, [refreshed]);
  const postNewCommentFetch = async () => {
    /* let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    */ let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: key },
      body: JSON.stringify({
        text: text,
      }),
    });
    let data = await response.json();
    let postId = data._id;

    console.log("id del post", postId);

    await fetch(url + postId, {
      method: "POST",
      headers: { Authorization: key },
      body: fd,
    });

    console.log("immagine gogogoo");
  };
  const handleFile = (ev) => {
    setFd((prev) => {
      prev.delete("post");
      prev.append("post", ev.target.files[0]);
      return prev;
    });
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
            <Button
              style={{ marginLeft: "370px", color: "black", fontWeight: "500" }}
              onClick={(e) => setShowModal(false)}
              variant="danger"
            >
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
          <Form.Group>
            <FormLabel>Aggiungi un`immagine</FormLabel>
            <FormControl
              onChange={handleFile}
              type="file"
              placeholder="Aggiungi un`immagine"
            ></FormControl>
          </Form.Group>
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              postNewCommentFetch();
              setShowModal(false);
              setRefreshed(!refreshed);
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

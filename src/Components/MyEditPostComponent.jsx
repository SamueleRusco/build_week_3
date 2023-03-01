import { useState } from "react";
import { Button, Form, FormControl, FormLabel, Modal } from "react-bootstrap";

const MyEditPostComponent = ({ editPost, setEditPost, postId }) => {
  const [text, setText] = useState("");
  const url = "https://striveschool-api.herokuapp.com/api/posts/" + postId;
  const urlGet = "https://striveschool-api.herokuapp.com/api/posts/";
  console.log("sono post id", postId);

  const postExperienceFetch = async () => {
    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    let response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: key },
      body: JSON.stringify({
        // cambio con quello che mi serve
        text: text,
      }),
    });
    let data = await response.json();
    console.log("text", data);
  };

  const deleteExperienceFetch = async () => {
    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    let response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: key },
    });
    let data = await response.json();
    console.log("text", data);
  };

  //   const getExperienceFetch = async () => {
  //     let key =
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
  //     let response = await fetch(urlGet, {
  //       method: "GET",
  //       headers: { Authorization: key },
  //     });
  //     let data = await response.json();
  //     console.log("text", data);
  //   };
  return (
    <>
      <Button
        onClick={() => {
          setEditPost(true);
          console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA", postId);
        }}
      >
        Send
      </Button>
      <Modal
        show={editPost}
        onHide={() => setEditPost(false)}
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
            className="me-2"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              postExperienceFetch();
            }}
          >
            post
          </Button>
          <Button
            onClick={() => {
              deleteExperienceFetch();
            }}
          >
            Elimina post
          </Button>
          {/* <Button
            onClick={() => {
              getExperienceFetch();
            }}
          >
            GET
          </Button> */}
          <Button onClick={(e) => setEditPost(false)} variant="danger">
            Annulla
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default MyEditPostComponent;

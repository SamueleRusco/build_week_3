import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { putPostImg } from "../Redux/Actions/putProfileImg";
import { useSelector } from "react-redux";
const MyEditPostComponent = ({
  editPost,
  setEditPost,
  postId,
  refreshed,
  setRefreshed,
}) => {
  const [text, setText] = useState("");
  const [fd, setFd] = useState(new FormData());
  const dispatch = useDispatch();
  const url = "https://striveschool-api.herokuapp.com/api/posts/" + postId;
  const key = useSelector((state) => state.profiles.bearer);

  console.log("Primo id", postId);

  const postExperienceFetch = async () => {
    /* let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    */ let response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: key },
      body: JSON.stringify({
        text: text,
      }),
    });
    let data = await response.json();
    console.log("text", data);
  };

  const deleteExperienceFetch = async () => {
    /* let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
     */ let response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: key },
    });
    setRefreshed(!refreshed);
    let data = await response.json();
    console.log("text", data);
  };

  const handleFile = (ev) => {
    setFd((prev) => {
      //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
      prev.delete("post"); //ricordatevi di svuotare il FormData prima :)
      prev.append("post", ev.target.files[0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return prev;
    });
  };
  return (
    <>
      <div className="d-flex flex-column bg-warning">
        <Button
          className="mb-2 p-0 bg-transparent text-secondary text-start"
          style={{ border: "none", fontSize: "0.9rem" }}
          type="submit"
          onClick={(e) => {
            setEditPost(true);
          }}
        >
          post
        </Button>
        <Button
          className="me-2 p-0 bg-transparent text-secondary text-start"
          style={{ border: "none", fontSize: "0.9rem" }}
          onClick={() => {
            deleteExperienceFetch();
            setRefreshed(true);
            setEditPost(false);
          }}
        >
          Elimina
        </Button>
      </div>
      <Modal
        show={editPost}
        onHide={() => setEditPost(false)}
        dialogClassName="modal-90w"
      >
        {/* <Form>
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
              if (text === "") {
                alert("Inserisci modifica");
              } else {
                postExperienceFetch();
                setEditPost(false);
              }
            }}
          >
            post
          </Button>
          <Button
            onClick={(e) => {
              setEditPost(false);
            }}
            variant="danger"
          >
            Annulla
          </Button>
        </Form> */}
        <Button
          style={{ backgroundColor: "white", color: "grey", border: "none" }}
          onClick={() => {
            setEditPost(true);
          }}
        >
          <PencilFill />
        </Button>
        {/* <Modal
        show={editModalOn}
        onHide={() => setEditModalOn(false)}
        dialogClassName="modal-90w"
      > */}
        <Form className="p-3">
          <Button
            onClick={() => {
              setEditPost(false);
            }}
          >
            Chiudi
          </Button>
          <hr />
          <Form.Group className="mb-4" controlId="formQualifica">
            <Form.Text className="text-muted">Qualifica</Form.Text>
            <Form.Control
              type="text"
              placeholder="Esempio: Teaching assistant"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="img">
            <Form.Text className="text-muted">Carica Immagine</Form.Text>
            <Form.Control
              type="file"
              placeholder="Carica Immagine"
              onChange={handleFile}
            />
          </Form.Group>

          <Button
            className="me-2"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              //   postExperienceFetch();
              postExperienceFetch();
              dispatch(putPostImg(fd, postId, key));
              setEditPost(false);
              console.log("secondo", postId);
            }}
          >
            Invia
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              //   postExperienceFetch();
              deleteExperienceFetch();
              setEditPost(false);
              // setRefreshed(!refreshed);
            }}
          >
            Elimina
          </Button>
        </Form>
      </Modal>
      {/* </Modal> */}
    </>
  );
};

export default MyEditPostComponent;

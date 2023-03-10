import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {
  Pencil,
  PencilFill,
  SendFill,
  ThreeDots,
  Trash,
  XLg,
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { putPostImg } from "../Redux/Actions/putProfileImg";
import { useSelector } from "react-redux";

const MyEditPostComponent = ({
  editPost,
  setEditPost,
  postId,
  refreshed,
  setRefreshed,
  post,
}) => {
  const [text, setText] = useState(post.text);
  const [fd, setFd] = useState(new FormData());
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const url = "https://striveschool-api.herokuapp.com/api/posts/" + postId;
  const key = useSelector((state) => state.profiles.bearer);

  const postExperienceFetch = async (id) => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/" + id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: key },
        body: JSON.stringify({
          text: text,
        }),
      }
    );
    await response.json();
  };

  const deleteExperienceFetch = async () => {
    let response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: key },
    });
    setRefreshed(!refreshed);
    await response.json();
  };

  const handleFile = (ev) => {
    setFd((prev) => {
      prev.delete("post");
      prev.append("post", ev.target.files[0]);
      return prev;
    });
  };
  useEffect(() => {}, []);

  return (
    <>
      <div style={{ position: "relative" }}>
        <ThreeDots onClick={() => setVisible(!visible)}></ThreeDots>
        {visible && (
          <div
            className="d-flex flex-column"
            style={{
              position: "absolute",
              left: "-1000%",
              zIndex: "10",
              border: "1px solid black",
              backgroundColor: "white",
              borderRadius: "5px",
              width: "190px",
              boxShadow: "-2px 5px 5px 0px rgba(61,61,61,0.38)",
              overflow: "hidden",
            }}
          >
            <Button
              className="p-0 bg-transparent text-start edit mb-2"
              style={{
                border: "none",
                paddingLeft: "10px",
                borderRadius: "0px",
                margin: "0",
                fontSize: "1rem",
                color: "dimgrey",
              }}
              type="submit"
              onClick={(e) => {
                setEditPost(true);
              }}
            >
              <Pencil /> Modifica post
            </Button>
            <Button
              className=" p-0 bg-transparent  text-start canc"
              style={{
                border: "none",
                paddingLeft: "10px",
                borderRadius: "0px",
                width: "100%",
                margin: "0",
                fontSize: "1rem",
                color: "dimgrey",
              }}
              onClick={() => {
                deleteExperienceFetch();
                setRefreshed(true);
                setEditPost(false);
              }}
            >
              <Trash></Trash> Elimina post
            </Button>
          </div>
        )}
      </div>
      <Modal
        show={editPost}
        onHide={() => setEditPost(false)}
        dialogClassName="modal-90w"
      >
        <Button
          style={{ backgroundColor: "white", color: "grey", border: "none" }}
          onClick={() => {
            setEditPost(true);
          }}
        >
          <PencilFill />
        </Button>
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
            <Form.Text className="text-muted">Modifica Post</Form.Text>
            <Form.Control
              type="text"
              placeholder=""
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
            className="me-2 bg-transparent commentHover px-0"
            type="submit"
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
              postExperienceFetch(postId);
              setRefreshed(true);
              dispatch(putPostImg(fd, postId, key));
              setEditPost(false);
            }}
          >
            <SendFill
              className="mb-1 me-1"
              style={{ fontSize: "1.3rem", fontWeight: "600" }}
            />
            Invia
          </Button>
          <Button
            className=" bg-transparent commentHover px-0"
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
              deleteExperienceFetch();
              setEditPost(false);
            }}
          >
            <XLg className="mb-1 me-1" />
            Elimina
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default MyEditPostComponent;

import { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormLabel,
  Modal,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  CardImage,
  CaretDownFill,
  ChatRightDots,
  ChatText,
  Clock,
  EmojiSmileUpsideDown,
  FileText,
  GlobeEuropeAfrica,
  ThreeDots,
  XLg,
  Youtube,
} from "react-bootstrap-icons";
import { fontWeight } from "@mui/system";

const NewPost = ({ showModal, setShowModal }) => {
  const [text, setText] = useState("");
  const [fd, setFd] = useState(new FormData());
  const [refreshed, setRefreshed] = useState(false);
  const [classButton, setClassButton] = useState("disabled");

  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const key = useSelector((state) => state.profiles.bearer);

  const handleChangeText = (e) => {
    const text = e.target.value;
    setText(text);
    if (text !== "") {
      setClassButton("");
    } else {
      setClassButton("disabled");
    }
  };

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
        <Form
          style={{
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection }}>
              <Form.Group>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid lightgrey",
                  }}
                >
                  <FormLabel
                    style={{
                      paddingLeft: "5px",
                      paddingTop: "5px",
                      fontSize: "1.2em",
                      fontWeight: "400",
                    }}
                  >
                    Crea un post
                  </FormLabel>
                  <div
                    className="closeButton"
                    style={{
                      height: "35px",
                      width: "35px",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <Button
                      style={{
                        color: "grey",
                        fontWeight: "800",
                        backgroundColor: "transparent",
                        margin: "0",

                        paddingBottom: "10px",

                        border: "none",
                      }}
                      onClick={(e) => setShowModal(false)}
                    >
                      <XLg />
                    </Button>
                  </div>
                </div>
                <div
                  className="py-3"
                  style={{ borderTop: "1px solid lightgrey", display: "flex" }}
                >
                  <div>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginLeft: "10px",
                      }}
                    >
                      <img
                        src={"https://placekitten.com/200/200"}
                        alt=""
                        style={{ width: "50px" }}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      marginLeft: "10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <p style={{ fontWeight: "600", margin: "0" }}>
                      {"sa"} {"mues"}
                    </p>

                    <Button
                      style={{
                        margin: "0",
                        border: "1px solid grey",
                        backgroundColor: "white",
                        color: "grey",
                        padding: "4px 12px 4px 12px",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <GlobeEuropeAfrica style={{ marginRight: "5px" }} />
                      <span style={{ textAlign: "center" }}>Chiunque</span>
                      <CaretDownFill style={{ marginLeft: "5px" }} />
                    </Button>
                  </div>
                </div>
                {/* setText(e.target.value) */}

                <FormControl
                  style={{ height: "35px", border: "none" }}
                  onChange={handleChangeText}
                  value={text}
                  type="input"
                  placeholder="Di cosa vorresti parlare?"
                ></FormControl>
              </Form.Group>
            </div>
            <EmojiSmileUpsideDown></EmojiSmileUpsideDown>
          </div>

          <Form.Group className="d-flex" style={{ marginBottom: "10px" }}>
            {/* <FormLabel>Aggiungi un`immagine</FormLabel> */}
            <FormControl
              onChange={handleFile}
              type="file"
              placeholder="Aggiungi un`immagine"
              id="fileForm"
              style={{ display: "none" }}
            ></FormControl>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <label
                className="styleForm"
                htmlFor="fileForm"
                style={{ borderRight: "1px solid lightgrey" }}
              >
                <p>
                  <CardImage></CardImage>
                </p>
                <p>
                  <Youtube></Youtube>
                </p>
                <p>
                  <FileText></FileText>
                </p>
                <p>
                  <ThreeDots></ThreeDots>
                </p>
              </label>

              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    color: "#666666",
                    fontWeight: "400",
                    marginLeft: "10px",
                  }}
                >
                  <ChatRightDots style={{ marginRight: "5px" }} />
                  <span>Tutti</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Clock></Clock>
                  <Button
                    className={classButton}
                    style={{
                      border: "none",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "10px",
                      marginLeft: "10px",
                      padding: "0 12px 0 12px",
                      fontWeight: "600",
                      color: "white",
                      backgroundColor: "#0a66c2",
                    }}
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
                </div>
              </div>
            </div>
          </Form.Group>
        </Form>
      </Modal>
    </>
  );
};

export default NewPost;

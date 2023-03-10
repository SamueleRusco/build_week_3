import { color } from "@mui/system";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import {
  ArrowLeftRight,
  Chat,
  ChatText,
  HandThumbsUp,
  Send,
  SendFill,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import MySingleComment from "./MySingleComment";

const MyCommentArea = ({
  news,
  refreshed,
  setRefreshed,
  postCommentFetch,
  postList,
  rateComment,
}) => {
  const [listaCommenti, setListaCommenti] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  const [commento, setCommento] = useState("");
  const user = useSelector((state) => state.profiles.result);
  const [commentPage, setCommentPage] = useState(5);
  //   useEffect(() => {
  //     commentFetch();
  //   }, []);

  const commentFetch = async () => {
    const url =
      "https://striveschool-api.herokuapp.com/api/comments/" + news._id;

    try {
      const fetchResult = await fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjI1OTAyY2FjZDAwMTMyZjE5OTYiLCJpYXQiOjE2NzgwOTQ5MzcsImV4cCI6MTY3OTMwNDUzN30.uzRPHpAAwxcNdLkzPvK3hvnf52zq0lEMj8yeocjustA",
          "Content-Type": "application/json",
        },
      });
      const arrayResult = await fetchResult.json();
      setListaCommenti(arrayResult);
      console.log("arrayresult", arrayResult);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Row className="d-flex p-3 px-2 justify-content-between text-center">
        <Col xs={3} className="commentHover">
          <Button
            className="bg-transparent px-0"
            style={{
              border: "none",
              borderRadius: "3px",
              color: "dimgrey",
              fontWeight: "500",
              fontSize: "0.9rem",
              width: "100%",
            }}
          >
            <HandThumbsUp
              className="mb-1 me-1"
              style={{ fontSize: "1.3rem", fontWeight: "600" }}
            />
            Like
          </Button>
        </Col>
        <Col xs={3} className="commentHover">
          <Button
            className="bg-transparent  px-0"
            style={{
              border: "none",
              borderRadius: "3px",
              color: "dimgrey",
              fontWeight: "500",
              fontSize: "0.9rem",
              width: "100%",
            }}
            onClick={() => {
              commentFetch();
              setVisible(true);
            }}
          >
            <ChatText
              className="mb-1 me-1"
              style={{ fontSize: "1.3rem", fontWeight: "600" }}
            />
            Commenta
          </Button>
        </Col>
        <Col xs={3} className="commentHover">
          <Button
            className="bg-transparent commentHover px-0"
            style={{
              border: "none",
              borderRadius: "3px",
              color: "dimgrey",
              fontWeight: "500",
              fontSize: "0.9rem",
              width: "100%",
            }}
          >
            <ArrowLeftRight
              className="mb-1 me-1"
              style={{ fontSize: "1.3rem", fontWeight: "600" }}
            />
            Repost
          </Button>
        </Col>
        <Col xs={3} className="commentHover">
          <Button
            onClick={() => {
              setRefreshed(true);
              postCommentFetch(commento, news._id);
              setSelected(false);
              setCommento("");
            }}
            className="bg-transparent commentHover px-0"
            style={{
              border: "none",
              borderRadius: "3px",
              color: "dimgrey",
              fontWeight: "500",
              fontSize: "0.9rem",
              width: "100%",
            }}
          >
            <SendFill
              className="mb-1 me-1"
              style={{ fontSize: "1.3rem", fontWeight: "600" }}
            />
            Invia
          </Button>
        </Col>
      </Row>
      {visible && (
        <div>
          <Form>
            <Row>
              <Col xs={1} className="text-center">
                <img
                  style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                  src={user && user.image}
                  alt=""
                />
              </Col>
              <Col xs={11}>
                <Form.Control
                  type="text"
                  placeholder="Inserisci commento"
                  value={commento}
                  style={}
                  onChange={(e) => {
                    setCommento(e.target.value);
                  }}
                />
              </Col>
              {/* <Col xs={2}>
                <Button
                  onClick={() => {
                    setRefreshed(true);
                    postCommentFetch(commento, news._id);
                    setSelected(false);
                    setCommento("");
                  }}
                >
                  Invia
                </Button>
              </Col> */}
            </Row>
          </Form>
        </div>
      )}
      {visible &&
        listaCommenti.length > 0 &&
        listaCommenti.map((element, index) => {
          return (
            <>
              {index < commentPage && (
                <MySingleComment
                  author={element?.author}
                  element={element}
                  key={element._id}
                  postList={postList}
                  refreshed={refreshed}
                  setRefreshed={setRefreshed}
                />
              )}
            </>
          );
        })}
      {visible && listaCommenti.length > commentPage && (
        <div
          className="mt-3 mb-0"
          style={{
            cursor: "pointer",
          }}
          onClick={() => setCommentPage(commentPage + 5)}
        >
          <p className="mb-0" style={{ fontSize: "0.9rem", color: "dimgrey" }}>
            Carica altri commenti
          </p>
        </div>
      )}
      {visible &&
        listaCommenti.length < commentPage &&
        listaCommenti.length > 5 && (
          <div
            className="mt-3 mb-0"
            style={{
              cursor: "pointer",
            }}
            onClick={() => setCommentPage(commentPage - 5)}
          >
            <p
              className="mb-0"
              style={{ fontSize: "0.9rem", color: "dimgrey" }}
            >
              Mostra meno
            </p>
          </div>
        )}
    </>
  );
};

export default MyCommentArea;

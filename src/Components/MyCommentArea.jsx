import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
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
      <Button
        onClick={() => {
          commentFetch();
          setVisible(true);
        }}
      >
        commenta
      </Button>
      {visible && (
        <div>
          <Form>
            <Row>
              <Col xs={2}>
                <img
                  style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                  src={user && user.image}
                />
              </Col>
              <Col xs={8}>
                {" "}
                <Form.Control
                  type="text"
                  placeholder="Inserisci commento"
                  value={commento}
                  onChange={(e) => {
                    setCommento(e.target.value);
                  }}
                />
              </Col>
              <Col xs={2}>
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
              </Col>
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
        <div onClick={() => setCommentPage(commentPage + 5)}>
          <p>mostra altri</p>
        </div>
      )}
      {visible &&
        listaCommenti.length < commentPage &&
        listaCommenti.length > 5 && (
          <Button onClick={() => setCommentPage(commentPage - 5)}>
            mostra meno
          </Button>
        )}
    </>
  );
};

export default MyCommentArea;

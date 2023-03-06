import React, { useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { PencilFill, XLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import MyEditPostComponent from "./MyEditPostComponent";
import MySingleComment from "./MySingleComment";

const MySingleNews = ({
  post,
  editPost,
  setEditPost,
  refreshed,
  setRefreshed,
  rateComment,
  postCommentFetch,
}) => {
  const profileID = useSelector((state) => state.profiles.result_id);
  const [selected, setSelected] = useState(false);
  const [commento, setCommento] = useState("");
  const userMail = useSelector((state) => state.profiles.result.email);
  console.log(userMail);

  return (
    <Card className="my-2 py-3 text-start">
      <Card.Body style={{ paddingTop: "0" }}>
        <div className="d-flex justify-content-between">
          <Card.Title style={{ fontSize: "1.2rem" }}>
            <img
              src={post.user.image}
              alt="propic"
              style={{
                width: "25px",
              }}
            />
            {post.user.name} {post.user.surname}
          </Card.Title>
        </div>
        <Card.Body style={{ position: "relative" }}>
          <Row>
            <Col xs={12}>
              <p>{post.text}</p>
              <div style={{}}></div>
            </Col>
          </Row>
        </Card.Body>
        <Card.Img
          src={post.image}
          style={{
            width: "100%",
            maxHeight: (post.image && "600px") || "0px",
          }}
          className="mb-3"
        ></Card.Img>
        <Card.Subtitle className=" text-muted" style={{ fontWeight: "400" }}>
          pubblicato il {post?.createdAt?.substring(0, 10)}
        </Card.Subtitle>
        {(!selected && (
          <Button
            onClick={() => {
              console.log(post._id);
              // commenta(post._id);
              // getCommentFetch();
              // postCommentFetch();
              setSelected(true);
            }}
          >
            Comment id
          </Button>
        )) || (
          <div>
            <Form>
              <Row>
                <Col xs={7}>
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
                      console.log(commento);
                      setRefreshed(true);
                      postCommentFetch(commento, post._id);
                      setSelected(false);
                      setCommento("");
                    }}
                  >
                    Invia
                  </Button>
                </Col>
                <Col xs={3}>
                  <Button
                    className="bg-danger"
                    onClick={() => {
                      console.log(commento);

                      setSelected(false);
                    }}
                  >
                    Annulla
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        )}
        {post.user._id === profileID ? (
          <>
            <MyEditPostComponent
              editPost={editPost}
              setEditPost={setEditPost}
              postId={post?._id}
              refreshFnc={setRefreshed}
              refreshed={refreshed}
            />
          </>
        ) : (
          ""
        )}{" "}
        {rateComment &&
          rateComment
            .filter((element) => element.elementId === post._id)
            .map((element) => (
              <MySingleComment
                element={element}
                key={element._id}
                refreshed={refreshed}
                setRefreshed={setRefreshed}
              />
            ))}
      </Card.Body>
    </Card>
  );
};

export default MySingleNews;

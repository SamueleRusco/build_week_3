import React, { useState } from "react";
import { Card, Col, Form, FormGroup, Row } from "react-bootstrap";

import { useSelector } from "react-redux";
import MyEditPostComponent from "./MyEditPostComponent";

const MySingleNews = ({
  post,
  editPost,
  setEditPost,
  refreshed,
  setRefreshed,
  rateComment,
  postCommentFetch,
}) => {
  const profileID = useSelector((state) => state.profiles.result._id);
  const [selected, setSelected] = useState(false);
  const [commento, setCommento] = useState("");
  const userMail = useSelector((state) => state.profiles.result.email);
  const bearer = useSelector((state) => state.profiles.bearer);
  const [otherComments, setOtherComments] = useState(5);

  return (
    <>
      <div className="d-flex justify-content-between">
        <Card.Title style={{ fontSize: "1.2rem" }}>
          <img
            className="me-2"
            src={post.user.image}
            alt="propic"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
          />
          {post.user.name} {post.user.surname}
        </Card.Title>
        {post.user._id === profileID ? (
          <>
            <MyEditPostComponent
              editPost={editPost}
              setEditPost={setEditPost}
              postId={post?._id}
              setRefreshed={setRefreshed}
              refreshed={refreshed}
              post={post}
            />
          </>
        ) : (
          ""
        )}
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
    </>
  );
};

export default MySingleNews;

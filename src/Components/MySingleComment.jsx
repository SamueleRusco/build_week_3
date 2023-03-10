import { border } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { PencilFill, SendFill, XLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const MySingleComment = ({
  element,
  commentRefresh,
  setCommentRefresh,
  refreshed,
  setRefreshed,
  postList,
  author,
}) => {
  const [showEditInput, setShowEditInput] = useState(false);
  const userMail = useSelector((state) => state.profiles.result.email);
  const username = useSelector((state) => state.profiles.result.username);
  const [edit, setEdit] = useState(element?.comment);
  const [utente, setUtente] = useState(null);
  // const listaCommenti = useSelector((state) => state.posts.commenti);
  const peopleArray = useSelector((state) => state.allProfiles.result);
  const key = useSelector((state) => state.profiles.bearer);
  const user = useSelector((state) => state.profiles.result);

  const deleteCommentFetch = async (idcommento) => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + idcommento,
      {
        method: "DELETE",
        headers: {
          Authorization: key,
          "Content-Type": "application/json",
        },
      }
    );
  };
  const editCommentFetch = async (idcommento) => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + idcommento,
      {
        method: "PUT",
        headers: {
          Authorization: key,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: edit.length > 0 && edit,
        }),
      }
    );
  };

  const userImage = () => {
    const image = peopleArray?.filter((e, i) => {
      return e.email === element.author;
    });

    return image[0];
  };

  // useEffect(() => {
  //   userImage();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="mt-4 d-flex ">
      <img
        src={userImage()?.image || "https://placekitten.com/200"}
        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        alt="https://placekitten.com/200"
      />
      <div
        className="ms-1 p-2"
        style={{
          backgroundColor: "#F2F2F2",
          borderRadius: "5px",
          borderTopLeftRadius: "0px",
          width: "100%",
        }}
      >
        <div className="d-flex justify-content-between">
          <div>
            <p className="mb-0" style={{ fontWeight: "600" }}>
              {userImage()?.name ||
                element.author +
                  " " +
                  ((userImage()?.surname && userImage()?.surname) || "")}
            </p>
            <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
              {userImage()?.title}
            </p>
          </div>
          <p className="text-muted" style={{ fontSize: "13px" }}>
            {userImage()?.updatedAt?.substring(0, 10) ||
              element.createdAt.substring(0, 10)}
          </p>
        </div>

        <p className="mb-0 mt-2" style={{ fontSize: "14px" }}>
          {element?.comment}
        </p>

        {(element?.author === userMail || element?.author === username) && (
          <>
            {!showEditInput && (
              <Row className="justify-content-end">
                <Col xs={5}>
                  <Button
                    className="bg-transparent"
                    style={{
                      border: "none",
                      color: "dimgrey",
                      fontSize: "0.9rem",
                    }}
                    onClick={() => {
                      setCommentRefresh(true);
                      deleteCommentFetch(element?._id);
                    }}
                  >
                    <XLg className="text-secondary" />
                    cancella commento
                  </Button>
                </Col>
                <Col xs={5}>
                  <Button
                    className="bg-transparent"
                    style={{
                      border: "none",
                      color: "dimgrey",
                      fontSize: "0.9rem",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowEditInput(true);
                      // editCommentFetch(element._id);
                    }}
                  >
                    <PencilFill className="text-secondary me-1" />
                    modifica commento
                  </Button>
                </Col>
              </Row>
            )}
            <Form className="mt-2" style={{ width: "100%" }}>
              {showEditInput && (
                <>
                  <FormGroup className="d-flex" style={{ width: "100%" }}>
                    <Col xs={9}>
                      <Form.Control
                        type="text"
                        value={edit}
                        placeholder="Aggiungi un commento..."
                        style={{
                          borderRadius: "20px",
                          border: "2px solid rgb(180,180,180)",
                          fontSize: "0.9rem",
                          paddingTop: "7px",
                          paddingBottom: "8px",
                        }}
                        onChange={(e) => setEdit(e.target.value)}
                      />
                    </Col>
                    <Col xs={2}>
                      <Button
                        onClick={(e) => {
                          // setRefreshed(true);
                          e.preventDefault();
                          setCommentRefresh(true);
                          editCommentFetch(element?._id);
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
                    <Col xs={1}>
                      <Button
                        onClick={(e) => {
                          // setRefreshed(true);
                          e.preventDefault();
                          setShowEditInput(false);
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
                        <XLg
                          className="mb-1 me-1"
                          style={{ fontSize: "1.3rem", fontWeight: "600" }}
                        />
                      </Button>
                    </Col>
                  </FormGroup>
                </>
              )}
              {/* {!showEditInput && (
                  <Button
                    className="bg-transparent"
                    style={{ border: "none", color: "dimgrey" }}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowEditInput(true);
                      // editCommentFetch(element._id);
                    }}
                  >
                    <PencilFill className="text-secondary me-1" />
                    modifica commento
                  </Button>
                )} */}
            </Form>
          </>
        )}
      </div>
    </div>
  );
};

export default MySingleComment;

import { border } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { PencilFill, XLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const MySingleComment = ({
  element,
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
            <div className="d-flex">
              {!showEditInput && (
                <Button
                  className="bg-transparent"
                  style={{ border: "none" }}
                  onClick={() => {
                    setRefreshed(true);
                    deleteCommentFetch(element?._id);
                  }}
                >
                  <XLg className="text-secondary" />
                </Button>
              )}
              <Form>
                {showEditInput && (
                  <>
                    <FormGroup>
                      <Form.Control
                        type="text"
                        placeholder="Modifica il commento"
                        value={edit}
                        onChange={(e) => setEdit(e.target.value)}
                      />
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setRefreshed(true);
                          editCommentFetch(element?._id);
                        }}
                      >
                        Conferma
                      </Button>
                      <Button
                        className="bg-danger"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowEditInput(false);
                        }}
                      >
                        Annulla
                      </Button>
                    </FormGroup>
                  </>
                )}
                {!showEditInput && (
                  <Button
                    className="bg-transparent"
                    style={{ border: "none" }}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowEditInput(true);
                      // editCommentFetch(element._id);
                    }}
                  >
                    <PencilFill className="text-secondary" />
                  </Button>
                )}
              </Form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MySingleComment;

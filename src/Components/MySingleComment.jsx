import React, { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { PencilFill, XLg } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const MySingleComment = ({ element, refreshed, setRefreshed }) => {
  const [showEditInput, setShowEditInput] = useState(false);
  const userMail = useSelector((state) => state.profiles.result.email);
  const [edit, setEdit] = useState("");

  const deleteCommentFetch = async (idcommento) => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + idcommento,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjI1OTAyY2FjZDAwMTMyZjE5OTYiLCJpYXQiOjE2NzgwOTQ5MzcsImV4cCI6MTY3OTMwNDUzN30.uzRPHpAAwxcNdLkzPvK3hvnf52zq0lEMj8yeocjustA",
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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjI1OTAyY2FjZDAwMTMyZjE5OTYiLCJpYXQiOjE2NzgwOTQ5MzcsImV4cCI6MTY3OTMwNDUzN30.uzRPHpAAwxcNdLkzPvK3hvnf52zq0lEMj8yeocjustA",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: edit.length > 0 && edit,
        }),
      }
    );
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <p className="m-0">
        {element.comment}{" "}
        <span className="text-secondary">{element.author}</span>
      </p>
      {element.author === userMail && (
        <>
          <div className="d-flex">
            {!showEditInput && (
              <Button
                className="bg-transparent"
                style={{ border: "none" }}
                onClick={() => {
                  setRefreshed(true);
                  deleteCommentFetch(element._id);
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
                        editCommentFetch(element._id);
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
  );
};

export default MySingleComment;

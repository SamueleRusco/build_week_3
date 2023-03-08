import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import MyEditPostComponent from "./MyEditPostComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  commentiFiltratiAction,
  listaCommentiAction,
} from "../Redux/Actions/postReducerActions";
import NewPost from "./NewPost";
import {
  CalendarDate,
  Image,
  Paperclip,
  PlayBtnFill,
  TextParagraph,
  ThreeDots,
} from "react-bootstrap-icons";
import { GET_PROFILE_LOADING } from "../Redux/Actions";
import { getProfileAction } from "../Redux/Actions";
import MySingleComment from "./MySingleNews";
import MySingleNews from "./MySingleNews";
import { width } from "@mui/system";
const Notizie = () => {
  const profileID = useSelector((state) => state.profiles.result._id);
  const listaCommenti = useSelector((state) => state.posts.commenti);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const friendIdList = useSelector((state) => state.friends.friendIdList);
  const key = useSelector((state) => state.profiles.bearer);
  const loader = useSelector((state) => state.profiles.loading);
  const [refreshed, setRefreshed] = useState(false);
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  const [rateComment, setRateComment] = useState(null);
  const [showComment, setShowComment] = useState(false);

  const [scrollComment, setScrollComment] = useState(10);

  const friendPosts = listaCommenti.filter(
    (e) => friendIdList?.includes(e.user?._id) || e.user?._id === profileID
  );

  useEffect(() => {
    setRefreshed(false);
    fetchNotizie();
    console.log("friend id list", friendIdList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshed]);

  const fetchNotizie = async () => {
    dispatch({ type: GET_PROFILE_LOADING, payload: true });
    dispatch(getProfileAction(key));
    try {
      const result = await fetch(url, {
        method: "GET",
        headers: { Authorization: key },
      });
      dispatch({
        type: GET_PROFILE_LOADING,
        payload: false,
      });

      const datiNotizie = await result.json();

      dispatch(listaCommentiAction(datiNotizie));
      dispatch(
        commentiFiltratiAction(
          listaCommenti.filter((element) => element.user?._id === profileID)
        )
      );
      console.log("lista commenti ", listaCommenti);
      getCommentFetch();
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: GET_PROFILE_LOADING, payload: false });
  };

  const postCommentFetch = async (commento, id, fetchMethod) => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjI1OTAyY2FjZDAwMTMyZjE5OTYiLCJpYXQiOjE2NzgwOTQ5MzcsImV4cCI6MTY3OTMwNDUzN30.uzRPHpAAwxcNdLkzPvK3hvnf52zq0lEMj8yeocjustA",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: commento.length > 0 && commento,
          rate: "1",
          elementId: id,
        }),
      }
    );
    if (response.ok) {
      let data = await response.json();
      console.log("commenti libri", data);
    }
  };

  const getCommentFetch = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjI1OTAyY2FjZDAwMTMyZjE5OTYiLCJpYXQiOjE2NzgwOTQ5MzcsImV4cCI6MTY3OTMwNDUzN30.uzRPHpAAwxcNdLkzPvK3hvnf52zq0lEMj8yeocjustA",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      let data = await response.json();
      setRateComment(data);
    }
  };

  return (
    <>
      <Card className="mb-4">
        <Card.Body className="pb-2">
          <Button
            className="text-start startPostBtnHover"
            style={{
              width: "100%",
              borderRadius: "30px",
              border: "1px solid lightgrey",
              padding: "12px 20px",
              backgroundColor: "white",
              color: "dimgray",
              fontWeight: "600",
            }}
            onClick={(e) => {
              setShowModal(true);
            }}
          >
            Avvia un Post
          </Button>
          <Row className="d-flex justify-content-between mt-2">
            <Col
              xs={3}
              className="postBtnHover pt-1 pb-2 ps-3"
              style={{ borderRadius: "5px", cursor: "pointer" }}
            >
              <button
                className="bg-transparent"
                style={{
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <Image className="me-1" style={{ color: "#0A66C2" }} />
                <span style={{ color: "dimgray" }}>Foto</span>
              </button>
            </Col>
            <Col
              xs={3}
              className="postBtnHover pt-1 pb-2 px-0"
              style={{ borderRadius: "5px", cursor: "pointer" }}
            >
              <button
                className="bg-transparent"
                style={{
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <PlayBtnFill className="me-1" style={{ color: "#5f9b41" }} />
                <span style={{ color: "dimgray" }}>Video</span>
              </button>
            </Col>
            <Col
              xs={2}
              className="postBtnHover pt-1 pb-2 px-0"
              style={{ borderRadius: "5px", cursor: "pointer" }}
            >
              <button
                className="bg-transparent"
                style={{
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <CalendarDate className="me-1" style={{ color: "#c37d16" }} />
                <span style={{ color: "dimgray" }}>Evento</span>
              </button>
            </Col>
            <Col
              xs={4}
              className="postBtnHover pt-1 pb-2 pe-2"
              style={{ borderRadius: "5px", cursor: "pointer" }}
            >
              <button
                className="bg-transparent text-start"
                style={{
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <TextParagraph className="me-1" style={{ color: "#e16745" }} />
                <span style={{ color: "dimgray" }}>Scrivi un articolo</span>
              </button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <NewPost
        showModal={showModal}
        setShowModal={setShowModal}
        refreshed={refreshed}
        setRefreshed={setRefreshed}
      />
      {/* {(loader && <Spinner variant="dark" />) || ({listaCommenti && */}
      <div style={{ display: "flex" }}>
        <hr class="flex-grow-1 me-2" />
        <h4>Notizie</h4>
      </div>
      {loader ? (
        <Spinner />
      ) : (
        friendPosts?.map((post, i) => {
          return (
            i < scrollComment && (
              <MySingleNews
                post={post}
                showComment={showComment}
                key={i}
                setShowComment={setShowComment}
                editPost={editPost}
                setEditPost={setEditPost}
                refreshed={refreshed}
                setRefreshed={setRefreshed}
                rateComment={rateComment}
                postCommentFetch={postCommentFetch}
              />
            )
          );
        })
      )}
      <Button
        className="bg-secondary"
        onClick={() => {
          setScrollComment(scrollComment + 10);
        }}
      >
        altri commenti
      </Button>
    </>
  );
};

export default Notizie;

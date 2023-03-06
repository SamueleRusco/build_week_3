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
import MySingleComment from "./MySingleComment";
import MySingleNews from "./MySingleComment";
const Notizie = () => {
  const profileID = useSelector((state) => state.profiles.result._id);
  const listaCommenti = useSelector((state) => state.posts.commenti);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const key = useSelector((state) => state.profiles.bearer);
  const loader = useSelector((state) => state.profiles.loading);
  const [refreshed, setRefreshed] = useState(false);
  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  console.log(profileID);
  const [rateComment, setRateComment] = useState(null);
  const [showComment, setShowComment] = useState(false);
  // const [commento, setCommento] = useState("");

  useEffect(() => {
    fetchNotizie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshed]);

  // const filtro = (element) => element.user._id === idUtilizzatore;

  const fetchNotizie = async () => {
    dispatch({ type: GET_PROFILE_LOADING, payload: true });
    dispatch(getProfileAction(key));
    console.log(loader);
    /* let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    */ try {
      const result = await fetch(url, {
        method: "GET",
        headers: { Authorization: key },
      });
      dispatch({
        type: GET_PROFILE_LOADING,
        payload: false,
      });

      const datiNotizie = await result.json();

      dispatch(
        listaCommentiAction(
          datiNotizie.filter(
            (element, index) => index > datiNotizie.length - 12
          )
        )
      );
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
    console.log(loader);
  };

  const postCommentFetch = async (commento, id, fetchMethod) => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjI1OTAyY2FjZDAwMTMyZjE5OTYiLCJpYXQiOjE2NzgwOTQ5MzcsImV4cCI6MTY3OTMwNDUzN30.uzRPHpAAwxcNdLkzPvK3hvnf52zq0lEMj8yeocjustA",
          // content-type esprime il content type del body
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
      console.log("commenti libri", rateComment);
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
            // style={{ marginTop: "200px" }}
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
      <NewPost showModal={showModal} setShowModal={setShowModal} />
      {/* {(loader && <Spinner variant="dark" />) || ({listaCommenti && */}
      <h4>Notizie</h4>
      {loader ? (
        <Spinner />
      ) : (
        listaCommenti &&
        listaCommenti?.map((post, i) => {
          return (
            i < 10 && (
              // <Card key={i} className="my-2 py-3 text-start">
              //   <Card.Body style={{ paddingTop: "0" }}>
              //     <div className="d-flex justify-content-between">
              //       <Card.Title style={{ fontSize: "1.2rem" }}>
              //         <img
              //           src={post.user.image}
              //           alt="propic"
              //           style={{
              //             width: "25px",
              //           }}
              //         />
              //         {post.user.name} {post.user.surname}
              //       </Card.Title>
              //     </div>
              //     <Card.Body style={{ position: "relative" }}>
              //       <Row>
              //         <Col xs={12}>
              //           <p>{post.text}</p>
              //           <div style={{}}></div>
              //         </Col>
              //       </Row>
              //     </Card.Body>
              //     <Card.Img
              //       src={post.image}
              //       style={{
              //         width: "100%",
              //         maxHeight: (post.image && "600px") || "0px",
              //       }}
              //       className="mb-3"
              //     ></Card.Img>
              //     <Card.Subtitle
              //       className=" text-muted"
              //       style={{ fontWeight: "400" }}
              //     >
              //       pubblicato il {post?.createdAt?.substring(0, 10)}
              //     </Card.Subtitle>
              //     {(!showComment && (
              //       <Button
              //         onClick={() => {
              //           console.log(post._id);
              //           // commenta(post._id);
              //           // getCommentFetch();
              //           // postCommentFetch();
              //           setShowComment(true);
              //         }}
              //       >
              //         Comment id
              //       </Button>
              //     )) || (
              //       <div>
              //         <Form>
              //           <Row>
              //             <Col xs={7}>
              //               {" "}
              //               <Form.Control
              //                 type="text"
              //                 placeholder="Inserisci commento"
              //                 value={commento}
              //                 onChange={(e) => {
              //                   setCommento(e.target.value);
              //                 }}
              //               />
              //             </Col>
              //             <Col xs={2}>
              //               <Button
              //                 onClick={() => {
              //                   console.log(commento);
              //                   postCommentFetch();
              //                   setShowComment(false);
              //                   setCommento("");
              //                 }}
              //               >
              //                 Invia
              //               </Button>
              //             </Col>
              //             <Col xs={3}>
              //               <Button
              //                 className="bg-danger"
              //                 onClick={() => {
              //                   console.log(commento);

              //                   setShowComment(false);
              //                 }}
              //               >
              //                 Annulla
              //               </Button>
              //             </Col>
              //           </Row>
              //         </Form>
              //       </div>
              //     )}
              //     {post.user._id === profileID ? (
              //       <>
              //         <MyEditPostComponent
              //           editPost={editPost}
              //           setEditPost={setEditPost}
              //           postId={post?._id}
              //           refreshFnc={setRefreshed}
              //           refreshed={refreshed}
              //         />
              //       </>
              //     ) : (
              //       ""
              //     )}{" "}
              //     {rateComment &&
              //       rateComment
              //         .filter((element) => element.elementId === post._id)
              //         .map((element) => <div>{element.comment}</div>)}
              //   </Card.Body>
              // </Card>
              <MySingleNews
                post={post}
                showComment={showComment}
                key={i}
                setShowComment={setShowComment}
                // commento={commento}
                // setCommento={setCommento}
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
    </>
  );
};

export default Notizie;

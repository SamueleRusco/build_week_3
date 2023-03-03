import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
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

const Notizie = () => {
  const listaCommenti = useSelector((state) => state.posts.commenti);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const url = "https://striveschool-api.herokuapp.com/api/posts/";
  useEffect(() => {
    fetchNotizie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const filtro = (element) => element.user._id === idUtilizzatore;

  const fetchNotizie = async () => {
    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    try {
      const result = await fetch(url, {
        method: "GET",
        headers: { Authorization: key },
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
          listaCommenti.filter(
            (element) => element.user?._id === "63fc659cf193e60013807f4d"
          )
        )
      );
      console.log("lista commenti ", listaCommenti);
    } catch (error) {
      console.log(error);
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
            Scrivi nuovo Post
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
      <h4>Notizie</h4>
      {listaCommenti &&
        listaCommenti?.map((post, i) => {
          return (
            i < 10 && (
              <Card key={i} className="my-2 py-3 text-start">
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
                      {"   "}
                      {post.user.name} {post.user.surname}
                    </Card.Title>
                    {/* {post.user._id === "63fc659cf193e60013807f4d" ? (
                      <div
                        style={{
                          cursor: "pointer",
                          backgroundColor:
                            (showSettings && "lightgray") || "transparent",
                          fontSize: "1.5rem",
                          width: "5%",
                          icon: "none",
                        }}
                        onClick={() => {
                          setShowSettings(!showSettings);
                        }}
                      >
                        <ThreeDots />
                        {showSettings && (
                          <div
                            className="p-2 px-3"
                            style={{
                              position: "absolute",
                              zIndex: "1",
                              right: "5%",
                              minWidth: "60%",
                              border: "1px solid lightgrey",
                              borderRadius: "5px",
                            }}
                          >
                            <MyEditPostComponent
                              editPost={editPost}
                              setEditPost={setEditPost}
                              postId={post?._id}
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      ""
                    )} */}
                  </div>

                  <Card.Body style={{ position: "relative" }}>
                    <Row>
                      <Col xs={12}>
                        <p>{post.text}</p>
                        <div style={{}}>
                          {/* {post.user._id === "63fc659cf193e60013807f4d" ? (
                            <>
                              <p
                                style={{
                                  backgroundColor:
                                    (showSettings && "lightgray") || "white",
                                  fontSize: "1.5rem",
                                  position: "absolute",
                                  bottom: "120%",
                                  right: "5%",
                                }}
                                onClick={() => {
                                  setShowSettings(!showSettings);
                                }}
                              >
                                ...
                              </p>
                            </>
                          ) : (
                            ""
                          )} */}
                        </div>
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
                  <Card.Subtitle
                    className=" text-muted"
                    style={{ fontWeight: "400" }}
                  >
                    pubblicato il {post?.createdAt?.substring(0, 10)}
                  </Card.Subtitle>
                  {post.user._id === "63fc659cf193e60013807f4d" ? (
                    <>
                      <MyEditPostComponent
                        editPost={editPost}
                        setEditPost={setEditPost}
                        postId={post?._id}
                      />
                    </>
                  ) : (
                    ""
                  )}
                </Card.Body>
              </Card>
            )
          );
        })}
    </>
  );
};

export default Notizie;

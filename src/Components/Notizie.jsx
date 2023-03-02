import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import MyEditPostComponent from "./MyEditPostComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  commentiFiltratiAction,
  listaCommentiAction,
} from "../Redux/Actions/postReducerActions";
import NewPost from "./NewPost";

const Notizie = () => {
  const idUtilizzatore = useSelector((state) => state.posts.loginId);
  const listaCommenti = useSelector((state) => state.posts.commenti);
  const commentiFiltrati = useSelector((state) => state.posts.commentiFiltrati);
  const dispatch = useDispatch();
  const [tutteNotizie, setTutteNotizie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(false);

  const url = "https://striveschool-api.herokuapp.com/api/posts/";

  useEffect(() => {
    fetchNotizie();
    console.log(tutteNotizie);
  }, []);

  const filtro = (element) => element.user._id === idUtilizzatore;

  const fetchNotizie = async () => {
    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";

    try {
      const result = await fetch(url, {
        method: "GET",
        headers: { Authorization: key },
      });

      const datiNotizie = await result.json();
      console.log("GET", datiNotizie);
      setTutteNotizie(datiNotizie);
      dispatch(listaCommentiAction(datiNotizie));
      dispatch(
        commentiFiltratiAction(
          listaCommenti.filter(
            (element) => element.user?._id === "63fc659cf193e60013807f4d"
          )
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        style={{ marginTop: "200px" }}
        onClick={(e) => {
          setShowModal(true);
        }}
      >
        Scrivi nuovo Post
      </Button>
      <NewPost showModal={showModal} setShowModal={setShowModal} />
      <h4>Notizie</h4>
      {listaCommenti &&
        listaCommenti?.map((post, i) => {
          return (
            i < 10 && (
              <Card key={i} className="my-2 py-3 text-start">
                <Card.Body>
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

                  <Card.Body>
                    <Row>
                      <Col xs={12}>
                        <p>{post.text}</p>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Subtitle
                    className=" text-muted"
                    style={{ fontWeight: "400" }}
                  >
                    pubblicato il {post?.createdAt?.substring(0, 10)}
                  </Card.Subtitle>
                  {post.user._id === "63fc659cf193e60013807f4d" ? (
                    <>
                      {/* <Button
                        onClick={() => {
                          setEditPost(true);
                          console.log("fejafwea", post._id);
                        }}
                      >
                        eccomi
                      </Button> */}
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

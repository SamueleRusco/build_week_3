import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { EyeFill, XLg } from "react-bootstrap-icons";

const Notizie = () => {
  const [tutteNotizie, setTutteNotizie] = useState();
  const url = "https://striveschool-api.herokuapp.com/api/posts/";

  useEffect(() => {
    fetchNotizie();
  }, []);

  const fetchNotizie = async () => {
    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";

    try {
      const result = await fetch(url, {
        method: "GET",
        headers: { Authorization: key },
      });
      const datiNotizie = await result.json();

      setTutteNotizie(datiNotizie);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h4>Notizie</h4>
      {tutteNotizie &&
        tutteNotizie.reverse().map((post, i) => {
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
                    Nome
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
                </Card.Body>
              </Card>
            )
          );
        })}
    </>
  );
};

export default Notizie;

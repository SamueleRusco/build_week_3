import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

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
      console.log(datiNotizie);
      setTutteNotizie(datiNotizie);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>hello world</div>
      {tutteNotizie &&
        tutteNotizie.map((post, i) => {
          return i < 1 && <Card></Card>;
        })}
    </>
  );
};

export default Notizie;

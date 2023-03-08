import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import MySingleComment from "./MySingleComment";

const MyCommentArea = ({ news, refreshed, setRefreshed }) => {
  const [listaCommenti, setListaCommenti] = useState([]);
  const [visible, setVisible] = useState(false);
  const [commentPage, setCommentPage] = useState(5);
  //   useEffect(() => {
  //     commentFetch();
  //   }, []);

  const commentFetch = async () => {
    const url =
      "https://striveschool-api.herokuapp.com/api/comments/" + news._id;

    try {
      const fetchResult = await fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1YjI1OTAyY2FjZDAwMTMyZjE5OTYiLCJpYXQiOjE2NzgwOTQ5MzcsImV4cCI6MTY3OTMwNDUzN30.uzRPHpAAwxcNdLkzPvK3hvnf52zq0lEMj8yeocjustA",
          "Content-Type": "application/json",
        },
      });
      const arrayResult = await fetchResult.json();
      setListaCommenti(arrayResult);
      console.log("arrayresult", arrayResult);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          commentFetch();
          setVisible(true);
        }}
      >
        Mostra commenti
      </Button>
      {visible &&
        listaCommenti.length > 0 &&
        listaCommenti.map((element, index) => {
          return (
            <>
              {index < commentPage && (
                <MySingleComment
                  element={element}
                  key={element._id}
                  refreshed={refreshed}
                  setRefreshed={setRefreshed}
                />
              )}
            </>
          );
        })}
      {visible && listaCommenti.length > commentPage && (
        <Button onClick={() => setCommentPage(commentPage + 5)}>
          mostra altri
        </Button>
      )}
      {visible && listaCommenti.length < commentPage && (
        <Button onClick={() => setCommentPage(commentPage - 5)}>
          mostra meno
        </Button>
      )}
    </>
  );
};

export default MyCommentArea;

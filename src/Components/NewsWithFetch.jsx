import { useEffect, useState } from "react";
import { Dot } from "react-bootstrap-icons";

const NewsWithFetch = () => {
  const [newsFetch, setNewsFetch] = useState([null]);
  let key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
  const url =
    " https://newsapi.org/v2/everything?q=apple&from=2023-03-02&to=2023-03-02&sortBy=popularity&apiKey=6b9000f1707e464797524605992cc624";

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const result = await fetch(url, {
        method: "GET",
      });
      const dati = await result.json();
      setNewsFetch(dati.articles);
    } catch (error) {
      console.log("cè un errore", error);
    }
  };

  return (
    <>
      {newsFetch &&
        newsFetch.map((articolo, i) => {
          const titleWords = articolo?.title.split(" "); // Dividi il titolo in parole
          const titleShortened = titleWords?.slice(0, 20).join(" "); // Prendi le prime 20 parole e riuniscile in una stringa

          if (i < 5) {
            return (
              <>
                <li key={i}>
                  <div className="hoverNotizie" style={{ display: "flex" }}>
                    <div style={{ display: "flex" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: " flex-start",
                        }}
                      >
                        <h6
                          style={{
                            fontSize: "3rem",
                            margin: "16px",
                          }}
                        >
                          &middot;{" "}
                        </h6>
                      </div>

                      <div>
                        <h6>
                          {" "}
                          {titleShortened}
                          {"..."}
                        </h6>
                        <p>di: {articolo?.author}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </>
            );
          }
        })}
    </>
  );
};
export default NewsWithFetch;

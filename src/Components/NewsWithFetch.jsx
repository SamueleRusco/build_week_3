import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const NewsWithFetch = () => {
  const [newsFetch, setNewsFetch] = useState([null]);
  const [loading, setLoading] = useState(false);

  const url =
    " https://newsapi.org/v2/everything?q=apple&from=2023-03-02&to=2023-03-02&sortBy=popularity&apiKey=6b9000f1707e464797524605992cc624";

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const result = await fetch(url, {
        method: "GET",
      });
      const dati = await result.json();
      setNewsFetch(dati.articles);
    } catch (error) {
      console.log("cè un errore", error);
    }
    setLoading(false);
  };

  return (
    <>
      {(!loading &&
        newsFetch &&
        newsFetch.map((articolo, i) => {
          const titleWords = articolo?.title.split(" ");
          const titleShortened = titleWords?.slice(0, 20).join(" ");
          if (i < 5) {
            return (
              <>
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  key={i}
                >
                  <div className="newsRightSide">
                    <h6>
                      {titleShortened}
                      {"..."}
                    </h6>
                  </div>
                  <p>di: {articolo?.author}</p>
                </div>
              </>
            );
          }
        })) || (
        <div
          style={{ width: "100%", height: "200px" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner variant="primary" />
        </div>
      )}
    </>
  );
};
export default NewsWithFetch;

import { useState } from "react";
export const Component = () => {
  const [fd, setFd] = useState(new FormData());
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/63ff5c39f443aa00132286d3",
      {
        method: "POST",
        body: fd,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU5N2ZiY2ZlYzFjZjAwMTU1YjliMDkiLCJpYXQiOjE2Nzc0ODUyNzYsImV4cCI6MTY3ODY5NDg3Nn0.zZRcvWE_qpD6Gr06xfZqQlVkqzkyl5BJI30JsV9rMqc",
        },
      }
    );
  };
  const handleFile = (ev) => {
    setFd((prev) => {
      prev.delete("post");
      prev.append("post", ev.target.files[0]);
      return prev;
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFile} />
        <button>SEND</button>
      </form>
    </>
  );
};

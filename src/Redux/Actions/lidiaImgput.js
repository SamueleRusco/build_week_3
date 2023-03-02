//Esempio di file upload usando FormData e Typescript

//Component.jsx
import { useState } from "react"; //ChangeEvent e FormEvent sono i tipi degli eventi onChange e onSubmit
export const Component = () => {
  const [fd, setFd] = useState(new FormData()); //FormData e' una classe usata per raccogliere dati non stringa dai form
  //E' formata da coppie chiave/valore => ["post", File], ["exp", File]
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/63ff5c39f443aa00132286d3",
      {
        //qui l'id andra' sostituito con un id DINAMICO!!!!!
        method: "POST",
        body: fd, //non serve JSON.stringify
        headers: {
          //NON serve ContentType :)
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWU5N2ZiY2ZlYzFjZjAwMTU1YjliMDkiLCJpYXQiOjE2Nzc0ODUyNzYsImV4cCI6MTY3ODY5NDg3Nn0.zZRcvWE_qpD6Gr06xfZqQlVkqzkyl5BJI30JsV9rMqc",
        },
      }
    );
  };
  const handleFile = (ev) => {
    setFd((prev) => {
      //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
      prev.delete("post"); //ricordatevi di svuotare il FormData prima :)
      prev.append("post", ev.target.files[0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
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

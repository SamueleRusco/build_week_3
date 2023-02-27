import { Card, Button } from "react-bootstrap";
import { CardText, Pencil } from "react-bootstrap-icons";
import MyButtonComponent from "./MyButtonComponent";

const MyUserDetailsCard = () => {
  return (
    <Card style={{ borderRadius: "10px" }}>
      <div className="position-relative">
        <Card.Img
          variant="top"
          src="https://placekitten.com/100"
          style={{ height: "160px" }}
        />
        <Button
          className="p-5 position-absolute"
          style={{
            borderRadius: "50%",
            height: "150px",
            width: "150px",
            left: "4%",
            bottom: "-25%",
            backgroundColor: "grey",
            border: "4px solid white",
          }}
        ></Button>
        <Button
          className="position-absolute"
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            right: "4%",
            top: "10%",
          }}
        ></Button>
      </div>

      <Card.Body className="text-start pt-5 position-relative">
        <Card.Title className="mt-2 mb-0" style={{ fontSize: "1.7rem" }}>
          Nome
        </Card.Title>
        <p className="mb-0">Studente presso roba</p>
        <p className="text-secondary" style={{ fontSize: "14px" }}>
          indirizzo ·{" "}
          <a href="1" style={{ textDecoration: "none", fontWeight: "600" }}>
            informazioni di contatto
          </a>
        </p>
        <Button
          className="position-absolute"
          style={{
            top: "3%",
            right: "3%",
            fontSize: "1.4rem",
            backgroundColor: "white",
            color: "grey",
            border: "none",
          }}
        >
          <Pencil />
        </Button>
        <MyButtonComponent
          text="Disponibile per"
          bgColor={"rgb(0, 115, 177)"}
          textColor="white"
        />
        <MyButtonComponent
          text="Aggiungi sezione del profilo"
          bgColor={"white"}
        />
        <MyButtonComponent text="Altro" textColor="grey" borderColor={"grey"} />
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default MyUserDetailsCard;

import { useEffect } from "react";
import { Card, Button, Row, Image } from "react-bootstrap";
import { CameraFill, Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../Redux/Actions";
import MyButtonComponent from "./MyButtonComponent";
import MyJobAdvisorCard from "./MyJobAdvisorCard";

const MyUserDetailsCard = () => {
  const profile = useSelector((state) => state.profiles.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileAction());
  }, []);
  return (
    <Card style={{ borderRadius: "10px" }}>
      <div className="position-relative">
        <Card.Img
          variant="top"
          src="https://placekitten.com/100"
          style={{ height: "160px" }}
        />
        <Image
          className="p-5 position-absolute"
          src={profile.image}
          style={{
            borderRadius: "50%",
            height: "150px",
            width: "150px",
            left: "4%",
            bottom: "-25%",
            backgroundColor: "grey",
            border: "4px solid white",
          }}
        />
        <Button
          className="position-absolute position-relative
          pe-2"
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            right: "4%",
            top: "10%",
            backgroundColor: "white",
            border: "none",
            color: "rgb(0, 115, 177)",
            fontSize: "1.5rem",
          }}
        >
          <CameraFill
            className="position-absolute"
            style={{ top: "22%", left: "22%" }}
          />
        </Button>
      </div>

      <Card.Body className="text-start pt-5 pb-4 position-relative">
        <Card.Title className="mt-2 mb-0" style={{ fontSize: "1.7rem" }}>
          {profile.name} {profile.surname}
        </Card.Title>
        <p className="mb-0">{profile.bio}</p>
        <p className="text-secondary" style={{ fontSize: "14px" }}>
          indirizzo · {profile.email}{" "}
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
        <div>
          <MyButtonComponent
            text="Disponibile per"
            bgColor={"rgb(0, 115, 177)"}
            textColor="white"
          />
          <MyButtonComponent
            text="Aggiungi sezione del profilo"
            bgColor={"white"}
          />
          <MyButtonComponent
            text="Altro"
            textColor="grey"
            borderColor={"grey"}
          />
        </div>
        <Row style={{ overflow: "hidden", flexWrap: "nowrap" }}>
          <MyJobAdvisorCard
            cardTitle={"Disponibile a lavorare"}
            cardText={"Ruoli di sviluppatore frontend"}
            cardLink={"Mostra dettagli"}
            bgColor={"#DCE6F1"}
          />
          <MyJobAdvisorCard
            cardTitle={"Fai sapere che stai facendo selezione"}
            cardText={"Attrai candidati qualificati"}
            cardLink={"inizia"}
          />
          <MyJobAdvisorCard
            cardTitle={"Metti in risalto i servizi che offri"}
            cardText={"La tua azienda apparirà nei motori di ricerca"}
            cardLink={"inizia"}
          />
        </Row>
      </Card.Body>
    </Card>
  );
};
export default MyUserDetailsCard;

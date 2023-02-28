import { useEffect } from "react";
import { Card, Button, Row, Image } from "react-bootstrap";
import { CameraFill, Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../Redux/Actions";
import { useState } from "react";
import { Card, Button, Row } from "react-bootstrap";
import {
  ArrowLeft,
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  CameraFill,
  Pencil,
} from "react-bootstrap-icons";
import MyButtonComponent from "./MyButtonComponent";
import MyJobAdvisorCard from "./MyJobAdvisorCard";

const MyUserDetailsCard = () => {
  const profile = useSelector((state) => state.profiles.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileAction());
  }, []);
  const [sliderCounter, setSliderCounter] = useState(0);
  return (
    <Card style={{ borderRadius: "10px", marginTop: "100px" }}>
      <div className="position-relative">
        <div
          variant="top"
          style={{
            height: "160px",
            width: "100%",
            backgroundImage: "url(https://placekitten.com/100)",
            backgroundSize: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        ></div>
        <Button
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
        <Row
          className="position-relative"
          style={{ overflow: "hidden", flexWrap: "nowrap" }}
        >
          {sliderCounter > 0 && (
            <ArrowLeftCircleFill
              className="position-absolute"
              style={{
                fontSize: "1.7rem",
                left: "-48%",
                top: "50%",
                zIndex: "1",
              }}
              onClick={() => {
                sliderCounter > 0 && setSliderCounter(sliderCounter - 1);
              }}
            />
          )}
          {sliderCounter < 1 && (
            <ArrowRightCircleFill
              className="position-absolute"
              style={{
                fontSize: "1.7rem",
                right: "-48%",
                top: "50%",
                zIndex: "1",
              }}
              onClick={() => {
                sliderCounter < 2 && setSliderCounter(sliderCounter + 1);
                console.log(sliderCounter);
              }}
            />
          )}
          {sliderCounter === 0 && (
            <MyJobAdvisorCard
              cardTitle={"Disponibile a lavorare"}
              cardText={"Ruoli di sviluppatore frontend"}
              cardLink={"Mostra dettagli"}
              bgColor={"#DCE6F1"}
            />
          )}
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

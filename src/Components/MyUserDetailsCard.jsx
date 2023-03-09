import { useEffect } from "react";
import { Card, Button, Row, Spinner } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getProfileAction, GET_PROFILE_LOADING } from "../Redux/Actions";
import { useState } from "react";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  CameraFill,
  Pencil,
} from "react-bootstrap-icons";
import MyButtonComponent from "./MyButtonComponent";
import MyJobAdvisorCard from "./MyJobAdvisorCard";

import MyForm from "./MyForm";
import { getAllProfileFetchAction } from "../Redux/Actions/allProfilesActions";
const MyUserDetailsCard = () => {
  const profile = useSelector((state) => state.profiles.result);
  const key = useSelector((state) => state.profiles.bearer);
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.profiles.loading);

  console.log(loader);
  useEffect(() => {
    dispatch(getProfileAction(key));
    dispatch(getAllProfileFetchAction(key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [sliderCounter, setSliderCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <Card style={{ borderRadius: "10px" }}>
      <div style={{ position: "relative" }}>
        <div
          variant="top"
          style={{
            height: "260px",
            width: "100%",
            backgroundImage: "url(https://placekitten.com/200)",
            backgroundSize: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", bottom: "-12%" }}>
            <div
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                border: "1px solid grey",
                overflow: "hidden",
                position: "relative",

                marginLeft: "20px",
              }}
            >
              <img
                src={profile.image}
                style={{
                  width: "170px",
                  position: "absolute",
                  right: "-15%",
                  top: "-15%",
                }}
              ></img>
            </div>
          </div>
        </div>

        {/* <Card.Img
          className="p-5 position-absolute"
          src={profile.image}
          style={{
            borderRadius: "50%",
            height: "150px",
            width: "150px",
            left: "4%",
            bottom: "-25%",
            backgroundColor: "green",
            border: "4px solid white",
          }}
        ></Card.Img> */}
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
        <p className="mb-0">{profile.title}</p>
        <p className="mb-0">
          <span className="text-secondary">Username: </span>
          {profile.username}
        </p>
        <p className="text-secondary" style={{ fontSize: "14px" }}>
          indirizzo · {profile.area}{" "}
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
          onClick={() => {
            setShowModal(true);
          }}
        >
          <Pencil />
        </Button>
        <MyForm showModal={showModal} setShowModal={setShowModal} />
        <div>
          <Button 
          className= "hoverButtonDisp"
          style={{
            
            backgroundColor: 'rgb(0, 115, 177)',
            color: 'white',
            borderRadius: '20px' ,
            marginRight: '10px',
          }}
          >
          Disponibile per
          </Button>
        
               <Button
      className="me-2 buttonMyNetwork"
      style={{
        border: "1px solid #0A66C2",
        borderRadius: "20px",
        padding: "4px 16px",
        fontWeight: "600",
        color:  "#0A66C2",
        backgroundColor: "white",
      }}
    >
      Aggiungi sezione del profilo
    </Button>
          
          <Button
      className="me-2 buttonMyNetworkGrey"
      style={{
        border: "1px solid #666666",
        borderRadius: "20px",
        padding: "4px 16px",
        fontWeight: "600",
        color:  "#666666",
        backgroundColor: "white",
      }}
    >
      Altro
    </Button>
        </div>
        <Row
          className="position-relative ciccio"
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

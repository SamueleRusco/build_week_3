import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import { Pencil, XLg } from "react-bootstrap-icons";
import MyEditExperiencesModal from "./MyEditExperiencesModal";
import MyExperienceForm from "./MyExperienceForm";
import { useSelector, useDispatch } from "react-redux";
import { GET_PROFILE_LOADING } from "../Redux/Actions";
const MyExperience = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editModalOn, setEditModalOn] = useState(false);
  const [experiences, setExperiences] = useState(null);
  const profileID = useSelector((state) => state.profiles.result._id);
  const key = useSelector((state) => state.profiles.bearer);
  const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${profileID}/experiences`;
  const loader = useSelector((state) => state.profiles.loading);
  console.log("sono exp2", experiences);
  useEffect(() => {
    getExperienceFetch();
  }, []);

  const getExperienceFetch = async () => {
    /* dispatch({ type: GET_PROFILE_LOADING, payload: true }); */
    let response = await fetch(baseEndpoint, {
      method: "GET",
      headers: { Authorization: key },
    });
    dispatch({
      type: GET_PROFILE_LOADING,
      payload: false,
    });

    let data = await response.json();

    setExperiences(data);

    /* console.log("sono get", experiences); */
  };

  return (
    <>
      <Card className="my-2 py-3 px-3 text-start position-relative">
        <Card.Body className="px-0">
          <Card.Title style={{ fontSize: "1.2rem" }}>{"Esperienze"}</Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontWeight: "400" }}
          ></Card.Subtitle>

          {/*inserire qui esperienze */}
        </Card.Body>
        <Button
          className="position-absolute"
          style={{
            top: "3%",
            right: "2%",
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
        <MyExperienceForm
          showModal={showModal}
          setShowModal={setShowModal}
          refresh={getExperienceFetch}
        />

        {experiences &&
          experiences?.map((element, index) => {
            /* console.log("sono id", element._id); */
            return (
              <Row
                className="py-3"
                style={{ borderTop: index > 0 && "1px solid lightgrey" }}
                key={element._id}
              >
                <Col xs={3}>
                  <img
                    src={element.image || ""}
                    alt=""
                    style={{ width: "48px", borderRadius: "50%" }}
                  />
                </Col>
                <Col xs={10} className="position-relative">
                  <p className="mb-0" style={{ fontWeight: "600" }}>
                    {element.role} {element.company}
                  </p>
                  <p style={{ fontSize: "0.9rem" }}>{element.description}</p>
                  <p style={{ fontSize: "0.9rem" }}>
                    {element.startDate &&
                      "Data di inizio: " + element?.startDate?.substring(0, 10)}
                  </p>
                  <p style={{ fontSize: "0.9rem" }}>
                    {element.endDate &&
                      "Data di fine: " + element?.endDate?.substring(0, 10)}
                  </p>
                </Col>
                <Col xs={2} style={{ textAlign: "end" }}>
                  {/* <Button
                    onClick={() => {
                      setEditModalOn(true);
                      console.log("ewafwe", element._id);
                    }}
                  >
                    Edit
                  </Button> */}
                  <MyEditExperiencesModal
                    exp={element}
                    id={element._id}
                    refresh={getExperienceFetch}
                  />
                </Col>
              </Row>
            );
          })}
      </Card>
    </>
  );
};

export default MyExperience;

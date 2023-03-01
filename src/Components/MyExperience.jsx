import { element } from "prop-types";
import { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Pencil, XLg } from "react-bootstrap-icons";
import MyButtonComponent from "./MyButtonComponent";
import MyEditExperiencesModal from "./MyEditExperiencesModal";
import MyExperienceForm from "./MyExperienceForm";

const MyExperience = () => {
  const [showModal, setShowModal] = useState(false);
  const [editModalOn, setEditModalOn] = useState(false);
  const [experiences, setExperiences] = useState(null);

  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/profile/63fc659cf193e60013807f4d/experiences";

  useEffect(() => {
    getExperienceFetch();
  }, []);

  const getExperienceFetch = async () => {
    let key =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
    let response = await fetch(baseEndpoint, {
      method: "GET",
      headers: { Authorization: key },
      // body: JSON.stringify({
      //   role: role,
      //   company: company,
      //   startDate: startDate,
      //   endDate: endDate,
      //   description: description,
      //   area: area,
      // }),
    });
    let data = await response.json();

    setExperiences(data);

    console.log("sono get", experiences);
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
          <div>inserire qui esperienze</div>
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
            console.log("sono id", element._id);
            return (
              <Row
                className="py-3"
                style={{ borderTop: index > 0 && "1px solid lightgrey" }}
                key={element._id}
              >
                {/* <Col xs={3}>
                  <img
                    src={element.image || ""}
                    alt=""
                    style={{ width: "48px", borderRadius: "50%" }}
                  />
                </Col> */}
                <Col xs={10}>
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
                    // editModalOn={editModalOn}
                    // setEditModalOn={setEditModalOn}
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

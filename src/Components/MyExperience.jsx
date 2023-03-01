import { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { EyeFill, XLg } from "react-bootstrap-icons";
import MyButtonComponent from "./MyButtonComponent";
import MyExperienceForm from "./MyExperienceForm";

const MyExperience = () => {
  return (
    <>
      <Card className="my-2 py-3 text-start position-relative">
        <Card.Body>
          <Card.Title style={{ fontSize: "1.2rem" }}>{"Esperienze"}</Card.Title>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontWeight: "400" }}
          ></Card.Subtitle>

          {/*inserire qui esperienze */}
        </Card.Body>
        <MyExperienceForm />
      </Card>
    </>
  );
};

export default MyExperience;

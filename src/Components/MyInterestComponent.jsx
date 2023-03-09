import { Card, Row, Col, Button } from "react-bootstrap";
import { EyeFill } from "react-bootstrap-icons";
import { useState } from "react";

const MyInterestComponent = () => {
  const [selectedBrand, setSelectedBrand] = useState(true);
  const [selectedSchool, setSelectedSchool] = useState(false);
  return (
    <>
      <Card className="my-2 pt-3 pb-3 text-start position-relative">
        <Card.Body className="pb-0">
          <Row className="titleInterest">
            <Col xs={12} md={4} className="d-flex">
              <Card.Title
                className="mb-0"
                style={{ fontSize: "1.2rem", alignSelf: "center" }}
              >
                {"Interessi"}
              </Card.Title>
            </Col>
          </Row>

          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ fontWeight: "400" }}
          >
            <EyeFill className="me-2" />
            Solo per te
          </Card.Subtitle>
        </Card.Body>
        <div className="ps-3 d-flex">
          <div>
            <Button
              className="bg-transparent"
              style={{
                fontSize: "0.8rem",
                color: "#057642",
                fontWeight: "600",
                border: "none",
                borderBottom: (selectedBrand && "2px solid #057642") || "none",
                borderRadius: "0px",
              }}
              onClick={() => {
                setSelectedBrand(true);
                setSelectedSchool(false);
              }}
            >
              Aziende
            </Button>
          </div>
          <div>
            <Button
              className="bg-transparent"
              style={{
                fontSize: "0.8rem",
                color: "#057642",
                fontWeight: "600",
                border: "none",
                borderBottom: (selectedSchool && "2px solid #057642") || "none",
                borderRadius: "0px",
              }}
              onClick={() => {
                setSelectedBrand(false);
                setSelectedSchool(true);
              }}
            >
              Scuole o università
            </Button>
          </div>
        </div>
        {selectedBrand && <h3 className="ms-2 mt-2">Linkedin</h3>}{" "}
        {selectedSchool && <h3 className="ms-2 mt-2">Epicode</h3>}
      </Card>
    </>
  );
};
export default MyInterestComponent;

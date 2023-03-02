import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";

const MyJobAdvisorCard = ({ cardTitle, bgColor, cardText, cardLink }) => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      {visible && (
        <Col xs={12} md={6} className="px-2">
          <Card
            className="mt-4 position-relative"
            style={{
              borderRadius: "12px",
              backgroundColor: bgColor || "white",
            }}
          >
            <Card.Body className="py-3">
              <Card.Title className="m-0" style={{ fontSize: "0.9rem" }}>
                {cardTitle}
              </Card.Title>
              <div style={{ lineHeight: "0.8" }}>
                <Card.Text className="m-0" style={{ fontSize: "0.9rem" }}>
                  {cardText}
                </Card.Text>
              </div>
              <Card.Text
                className="m-0 text-primary"
                style={{ fontSize: "0.9rem" }}
                href="#"
              >
                {cardLink}
              </Card.Text>
              <Button
                className=" position-absolute bg-transparent p-0"
                style={{
                  border: "none",
                  top: "10%",
                  right: "3%",
                }}
              >
                <XLg
                  className="text-dark"
                  onClick={() => {
                    setVisible(false);
                  }}
                />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};
export default MyJobAdvisorCard;

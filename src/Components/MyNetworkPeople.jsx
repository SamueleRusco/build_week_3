import { borderRadius, height } from "@mui/system";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  friendsAdderAction,
  friendsRemoverAction,
} from "../Redux/Actions/friendsActions";

const MyNetworkPeople = ({ randomized }) => {
  const friendIdList = useSelector((state) => state.friends.friendIdList);
  const dispatch = useDispatch();
  return (
    <Row>
      {randomized &&
        randomized?.map((element, index) => (
          <Col xs={6} lg={4} xl={4} key={"keyNetwork: " + index}>
            <Card>
              <Card.Body
                className="p-2 d-flex justify-content-center flex-column align-items-center"
                style={{
                  backgroundImage: `url(${element?.image})`,
                  backgroundSize: "100% 60px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <img
                  alt="#"
                  src={element?.image}
                  style={{
                    height: "104px",
                    width: "104px",
                    borderRadius: "50%",
                  }}
                />
                <p className="mt-2" style={{ fontWeight: "600" }}>
                  {element?.name + " " + element?.surname}
                </p>
                {!friendIdList.includes(element?._id) ? (
                  <Button
                    className="me-2"
                    style={{
                      border: "1px solid dimgrey",
                      borderRadius: "20px",
                      padding: "4px 16px",
                      fontWeight: "600",
                      color: "dimgrey",
                      backgroundColor: "white",
                    }}
                    onClick={() => {
                      dispatch(friendsAdderAction(element._id));
                    }}
                  >
                    collegati
                  </Button>
                ) : (
                  <Button
                    className="me-2"
                    style={{
                      border: "1px solid rgb(0, 115, 177)",
                      borderRadius: "20px",
                      padding: "4px 16px",
                      fontWeight: "600",
                      color: "white",
                      backgroundColor: "rgb(0, 115, 177)",
                    }}
                    onClick={() => {
                      dispatch(friendsRemoverAction(element._id));
                    }}
                  >
                    collegato
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default MyNetworkPeople;

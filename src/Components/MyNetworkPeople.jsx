import { borderRadius, height } from "@mui/system";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
          <Col
            xs={6}
            lg={4}
            xl={4}
            key={"keyNetwork: " + index}
            className="mb-2"
          >
            <Card style={{ height: "300px", borderRadius: "8px" }}>
              <Card.Body
                className="p-2 d-flex justify-content-between flex-column align-items-center text-center"
                style={{
                  backgroundImage: `url(${
                    (element?.image?.length > 6 && element?.image) ||
                    "https://placekitten.com/200/200"
                  })`,
                  backgroundSize: "100% 70px",
                  backgroundRepeat: "no-repeat",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              >
                <div className="pt-2">
                  <img
                    className=""
                    alt="#"
                    src={
                      element?.image?.length > 6
                        ? element?.image
                        : "https://placekitten.com/200/200"
                    }
                    style={{
                      height: "104px",
                      width: "104px",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <div>
                  <p
                    className="mt-2 mb-1"
                    style={{ fontWeight: "600", overflow: "ellipsis" }}
                  >
                    <Link
                      to={`/profiles/${element?._id}`}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      {element?.name + " " + element?.surname}
                    </Link>
                  </p>
                  <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
                    {element?.title?.length > 40
                      ? element?.title?.substring(0, 37) + "..."
                      : element?.title}
                  </p>
                </div>
                <p className="text-secondary " style={{ fontSize: "0.9rem" }}>
                  {" "}
                  In base al tuo profilo
                </p>
                {!friendIdList.includes(element?._id) ? (
                  <Button
                    className="me-2 gButtonHover"
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
                    Collegati
                  </Button>
                ) : (
                  <Button
                    className="me-2 bButtonHover"
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
                    Collegato
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

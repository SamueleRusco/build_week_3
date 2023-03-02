import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Leftside from "./Leftside";
import Main from "./Main";
import Notizie from "./Notizie";
import Rightside from "./Rightside";

const MyNewsSectionComponent = () => {
  return (
    // <div>
    //
    // </div>
    <div className="body">
      <Leftside />
      <Main />

      <Rightside />
    </div>
  );
};
export default MyNewsSectionComponent;

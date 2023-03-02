import React from "react";
import Leftside from "./Leftside";
import Main from "./Main";
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

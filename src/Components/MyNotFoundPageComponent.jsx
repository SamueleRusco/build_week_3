import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  borderSelectorActions,
  NOT_FOUND,
} from "../Redux/Actions/borderSelectorAction";

const MyNotFoundPageComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(borderSelectorActions(NOT_FOUND));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <h1 className="text-secondary">404 not found</h1>
      </div>
    </div>
  );
};

export default MyNotFoundPageComponent;

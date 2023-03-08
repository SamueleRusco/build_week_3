import React from "react";
import { Col, Row } from "react-bootstrap";

const JobCard = ({ filteredJobsList }) => {
  return (
    <Row className="py-3">
      {filteredJobsList &&
        filteredJobsList.data?.map((singleJob, index) => {
          return index < 20 && <div>{singleJob.title}</div>;
        })}
      <Col xs={3}></Col>
      <Col xs={10} className="position-relative">
        <p className="mb-0" style={{ fontWeight: "600" }}></p>
        <p style={{ fontSize: "0.9rem" }}></p>
        <p style={{ fontSize: "0.9rem" }}></p>
        <p style={{ fontSize: "0.9rem" }}></p>
      </Col>
    </Row>
  );
};

export default JobCard;

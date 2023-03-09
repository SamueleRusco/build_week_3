import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BriefcaseFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addJob, removeJob } from "../Redux/Actions/jobsActions";

const JobCard = ({ jobs }) => {
  const favouritejobs = useSelector((state) => state.jobs.favouriteJobs);
  const dispatch = useDispatch();

  return (
    <Row className="py-3">
      {jobs &&
        jobs.data?.map((singleJob, index) => {
          return (
            index < 20 && (
              <div key={"ID: " + index} className="mb-2">
                <Card>
                  <Card.Body>
                    <h5 style={{ fontSize: "1.1rem" }}>
                      <a
                        alt="nulla"
                        href={singleJob.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        {singleJob?.title}
                      </a>
                    </h5>

                    <div className="d-flex">
                      <p>
                        {singleJob?.company_name}
                        <span>·</span>
                      </p>
                      <p>{singleJob?.candidate_required_location}</p>
                      <span>·</span>
                      <p>{singleJob?.publication_date?.substring(0, 10)}</p>
                    </div>
                    <p>
                      <BriefcaseFill className="me-2 mb-1 text-secondary" />
                      {singleJob?.job_type}
                    </p>

                    {favouritejobs.includes(singleJob?._id) ? (
                      <div>
                        <Button
                          className="px-3"
                          style={{
                            backgroundColor: "rgb(0, 115, 177)",
                            border: "1px solid rgb(0, 115, 177)",
                            borderRadius: "20px",
                          }}
                          onClick={() => {
                            dispatch(removeJob(singleJob?._id));
                          }}
                        >
                          Salvato
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <Button
                          className="px-3"
                          style={{
                            backgroundColor: "transparent",
                            border: "2px solid dimgrey",
                            borderRadius: "20px",
                            color: "dimgrey",
                          }}
                          onClick={() => {
                            dispatch(addJob(singleJob?._id));
                          }}
                        >
                          Salva
                        </Button>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </div>
            )
          );
        })}
      {/* <Col xs={3}></Col>
      <Col xs={10} className="position-relative">
        <p className="mb-0" style={{ fontWeight: "600" }}></p>
        <p style={{ fontSize: "0.9rem" }}></p>
        <p style={{ fontSize: "0.9rem" }}></p>
        <p style={{ fontSize: "0.9rem" }}></p>
      </Col> */}
    </Row>
  );
};

export default JobCard;

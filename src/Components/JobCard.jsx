import React, { useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { BriefcaseFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addJob, removeJob } from "../Redux/Actions/jobsActions";

const JobCard = ({ jobs }) => {
  const favouritejobs = useSelector((state) => state.jobs.favouriteJobs);
  const favouriteJobsId = favouritejobs.map((e) => e._id);
  const dispatch = useDispatch();
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Row className="py-3">
      {jobs &&
        jobs?.map((singleJob, index) => {
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
                    <div>
                      <p className="mb-1">{singleJob?.company_name}</p>
                      <p className="mb-1">
                        {singleJob?.candidate_required_location}
                      </p>

                      <p className="mb-1">
                        {singleJob?.publication_date?.substring(0, 10)}
                      </p>
                    </div>
                    <p>
                      <BriefcaseFill className="me-2 mb-1 text-secondary" />
                      {singleJob?.job_type !== ""
                        ? singleJob?.job_type
                        : "Not specified"}
                    </p>
                    <div className="d-flex">
                      {favouriteJobsId?.includes?.(singleJob?._id) ? (
                        <>
                          <Button
                            className="px-3 bButtonHover"
                            style={{
                              backgroundColor: "rgb(0, 115, 177)",
                              border: "1px solid rgb(0, 115, 177)",
                              borderRadius: "20px",
                            }}
                            onClick={() => {
                              dispatch(removeJob(singleJob));
                            }}
                          >
                            Salvato
                          </Button>
                        </>
                      ) : (
                        <div>
                          <Button
                            className="px-3 gButtonHover"
                            style={{
                              backgroundColor: "transparent",
                              border: "2px solid dimgrey",
                              borderRadius: "20px",
                              color: "dimgrey",
                            }}
                            onClick={() => {
                              dispatch(addJob(singleJob));
                            }}
                          >
                            Salva
                          </Button>
                        </div>
                      )}{" "}
                      {!showDescription && (
                        <p
                          className="text-primary jobDescription mb-0 ms-3 align-self-center"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setShowDescription(true);
                          }}
                        >
                          Mostra dettagli
                        </p>
                      )}
                      {showDescription && (
                        <p
                          className="text-primary jobDescription mb-0 ms-3 align-self-center"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setShowDescription(false);
                          }}
                        >
                          Mostra meno
                        </p>
                      )}
                    </div>
                    {showDescription && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: singleJob?.description,
                        }}
                      />
                    )}
                    {showDescription && (
                      <p
                        className="text-primary jobDescription mb-0 ms-3 align-self-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShowDescription(false);
                        }}
                      >
                        Mostra meno
                      </p>
                    )}
                  </Card.Body>
                </Card>
              </div>
            )
          );
        })}
    </Row>
  );
};

export default JobCard;

import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { BriefcaseFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addJob, removeJob } from "../Redux/Actions/jobsActions";

const FavouriteJobsComponent = ({ singleJob, index }) => {
  const dispatch = useDispatch();
  const favouriteJobs = useSelector((state) => state.jobs.favouriteJobs);
  const favouriteJobsId = favouriteJobs?.map((e) => e._id);
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      key={"ID: " + index}
      className={index === favouriteJobs?.length - 1 ? "mb-0" : "mb-2"}
    >
      <Card
        style={{
          border: "none",
          borderRadius: "0px",
          borderBottom:
            index === favouriteJobs?.length - 1
              ? "none"
              : "1px solid lightgrey",
        }}
      >
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
  );
};

export default FavouriteJobsComponent;

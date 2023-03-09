import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import JobCard from "./JobCard";
import MyFooterPart from "./MyFooterPart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { jobsActions, searchJobsActions } from "../Redux/Actions/jobsActions";
import { useSelector } from "react-redux";
import { useState } from "react";
import FilteredJobCard from "./FilteredJobCard";
import { height } from "@mui/system";
const JobPage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobsList);
  const filteredJobsList = useSelector((state) => state.jobs.filteredJobsList);
  const [searchParams, setSearchParams] = useState("");
  const [category, setCategory] = useState("");
  const [filteredOn, setfilteredOn] = useState(false);
  const loading = useSelector((state) => state.jobs.loading);

  useEffect(() => {
    console.log(loading);
    dispatch(jobsActions());
    console.log(loading);
    // setTimeout(() => setLoading(false), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      className="py-4"
      style={{
        marginTop: "70px",
        backgroundColor: "#f3f2ef",
      }}
    >
      {!loading ? (
        <Row>
          <Col xs={3} md={4} className="d-none d-md-block"></Col>
          <Col xs={12} md={8} xl={7}>
            <Form>
              <Form.Group>
                <Form.Text className="text-muted">
                  Cerca per tipologia
                </Form.Text>
                <Form.Select
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option value="search=">Lavoro</option>
                  <option value="company=">Compagnia</option>
                  <option value="category="> Categoria</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-4 mt-1" controlId="formAzienda">
                <Form.Text className="text-muted mt-1">
                  Scrivi qualcosa
                </Form.Text>
                <Form.Control
                  type="text"
                  placeholder="Esempio: Epicode"
                  value={searchParams}
                  onChange={(e) => {
                    setSearchParams(e.target.value);
                    console.log(searchParams);
                  }}
                />
              </Form.Group>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(searchJobsActions(searchParams, category));
                  setfilteredOn(true);
                  setSearchParams("");
                }}
              >
                {" "}
                Cerca
              </Button>
            </Form>
            {filteredOn && (
              <FilteredJobCard filteredJobsList={filteredJobsList} />
            )}
            {!filteredOn && <JobCard jobs={jobs} />}
            <Button onClick={() => setfilteredOn(false)}>
              {" "}
              Annulla Ricerca
            </Button>
          </Col>
          <Col
            lg={3}
            className="d-none d-lg-block"
            style={{ backgroundColor: "#f3f2ef" }}
          ></Col>
        </Row>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", width: "100%" }}
        >
          <Spinner />
        </div>
      )}

      <MyFooterPart />
    </Container>
  );
};
export default JobPage;

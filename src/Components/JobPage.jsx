import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import JobCard from "./JobCard";
import MyFooterPart from "./MyFooterPart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { jobsActions, searchJobsActions } from "../Redux/Actions/jobsActions";
import { useSelector } from "react-redux";
import { useState } from "react";
import FilteredJobCard from "./FilteredJobCard";
import { height } from "@mui/system";
import {
  BellFill,
  Bookmark,
  BookmarkFill,
  Clipboard2Check,
  Clipboard2CheckFill,
  GearFill,
  Youtube,
} from "react-bootstrap-icons";
const JobPage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobsList);
  const filteredJobsList = useSelector((state) => state.jobs.filteredJobsList);
  const [searchParams, setSearchParams] = useState("");
  const [category, setCategory] = useState("");
  const [filteredOn, setfilteredOn] = useState(false);
  const loading = useSelector((state) => state.jobs.loading);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  useEffect(() => {
    dispatch(jobsActions());
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
          <Col xs={3} md={3} className="d-none d-md-block ps-5 ">
            <Card>
              <Card.Body className="px-0">
                <div
                  onMouseEnter={() => {
                    setHover1(true);
                  }}
                  onMouseLeave={() => {
                    setHover1(false);
                  }}
                >
                  <p
                    className="mb-0 py-2 px-3"
                    style={{
                      fontWeight: "600",
                      color: "dimgrey",
                      fontSize: "0.9rem",
                      backgroundColor: (hover1 && "lightgrey") || "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <BookmarkFill className="me-2" />
                    Le mie offerte di lavoro
                  </p>
                </div>
                <div
                  onMouseEnter={() => {
                    setHover2(true);
                  }}
                  onMouseLeave={() => {
                    setHover2(false);
                  }}
                >
                  <p
                    className="mb-0 py-2 px-3"
                    style={{
                      fontWeight: "600",
                      color: "dimgrey",
                      fontSize: "0.9rem",
                      backgroundColor: (hover2 && "lightgrey") || "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <BellFill className="me-2" />
                    Avvisi offerte di lavoro
                  </p>
                </div>
                <div
                  onMouseEnter={() => {
                    setHover3(true);
                  }}
                  onMouseLeave={() => {
                    setHover3(false);
                  }}
                >
                  <p
                    className="mb-0 py-2 px-3"
                    style={{
                      fontWeight: "600",
                      color: "dimgrey",
                      fontSize: "0.9rem",
                      backgroundColor: (hover3 && "lightgrey") || "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <Clipboard2Check className="me-2" /> Valutazione delle
                    competenze
                  </p>
                </div>
                <div
                  onMouseEnter={() => {
                    setHover4(true);
                  }}
                  onMouseLeave={() => {
                    setHover4(false);
                  }}
                >
                  <p
                    className="mb-0 py-2 px-3"
                    style={{
                      fontWeight: "600",
                      color: "dimgrey",
                      fontSize: "0.9rem",
                      backgroundColor: (hover4 && "lightgrey") || "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <Youtube className="me-2" />
                    Indicazioni per chi cerca lavoro
                  </p>
                </div>
                <div
                  onMouseEnter={() => {
                    setHover5(true);
                  }}
                  onMouseLeave={() => {
                    setHover5(false);
                  }}
                >
                  <p
                    className="mb-0 py-2 px-3"
                    style={{
                      fontWeight: "600",
                      color: "dimgrey",
                      fontSize: "0.9rem",
                      backgroundColor: (hover5 && "lightgrey") || "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <GearFill className="me-2" /> Impostazioni di candidatura
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={8} lg={5} xl={5}>
            <Card>
              <Card.Body>
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
              </Card.Body>
            </Card>

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
            lg={4}
            xl={4}
            className="d-none d-lg-block bg-warning"
            style={{ backgroundColor: "#f3f2ef" }}
          ></Col>
        </Row>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", width: "100%" }}
        >
          <Spinner variant="primary" />
        </div>
      )}

      <MyFooterPart />
    </Container>
  );
};
export default JobPage;

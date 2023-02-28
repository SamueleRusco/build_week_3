export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";
export const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";

const baseEndpoint =
  "https://striveschool-api.herokuapp.com/api/profile/63fc659cf193e60013807f4d";

export const getProfileAction = () => {
  let key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI";
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint, {
        method: "GET",
        headers: { authorization: key },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: GET_PROFILE,
          payload: data,
        });
      } else {
        alert("error fetching profiles");
        console.log("error");
        dispatch({
          type: GET_PROFILE_ERROR,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_PROFILE_ERROR,
      });
    }
  };
};

// const putProfileFetch = async () => {
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNmRhY2YxOTNlNjAwMTM4MDdmNTUiLCJpYXQiOjE2Nzc0ODc1MzMsImV4cCI6MTY3ODY5NzEzM30.28A_muadu_RXL6zQnjtabqpaF0Z-NZkfstgseIRnVsQ";

//   let response = await fetch(
//     "https://striveschool-api.herokuapp.com/api/profile",
//     {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         name,
//       }),
//     }
//   );
//   const data = await response.json();
//   console.log(data);
// };
/* import Profiles from "./Profiles";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileAction } from "../Redux/Actions";
import { useDispatch } from "react-redux";
const MainPage = () => {
  const profile = useSelector((state) => state.profiles.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return profile.map((profileData) => (
    <Profiles key={profileData._id} data={profileData}></Profiles>
  ));
};

export default MainPage; */

/* import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profiles = ({ data }) => {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>
          {data.name} {data.surname}
        </Card.Title>
        <Card.Text>{data.bio}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Profiles; */

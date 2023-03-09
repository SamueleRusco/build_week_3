import {
  GET_PROFILE,
  GET_PROFILE_ERROR,
  GET_PROFILE_LOADING,
} from "../Actions";

const initialState = {
  result: [],
  loading: true,
  error: false,
  bearer: process.env.REACT_APP_BEARER_TOKEN,
  // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDAxZDg5MWFiM2M1ZTAwMTM4MGJlYzkiLCJpYXQiOjE2Nzc4NDI1NzgsImV4cCI6MTY3OTA1MjE3OH0.Qs_oEpQZBqHikOTTmC3-OBqeaTX4v3QuV3B5FpsGtag",
};
/* Samuele bearer "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI",
 */

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        result: action.payload,
      };

    case GET_PROFILE_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_PROFILE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default profileReducer;

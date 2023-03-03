import {
  GET_PROFILE,
  GET_PROFILE_ERROR,
  GET_PROFILE_LOADING,
} from "../Actions";

const initialState = {
  result: [],
  loading: false,
  error: false,
  bearer:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZjNjU5Y2YxOTNlNjAwMTM4MDdmNGQiLCJpYXQiOjE2Nzc0ODU0NzMsImV4cCI6MTY3ODY5NTA3M30.4UuEx0E0rg5moiQl2yjBzNkAo75xaKrDS6hY-r_GSLI",
};

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
        loading: !state.loading,
      };
    default:
      return state;
  }
};
export default profileReducer;

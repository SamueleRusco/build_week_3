import {
  GET_PROFILE,
  GET_PROFILE_ERROR,
  GET_PROFILE_LOADING,
} from "../Actions";

const initialState = {
  result: [],
  loading: false,
  error: false,
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

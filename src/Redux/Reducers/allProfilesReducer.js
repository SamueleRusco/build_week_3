import {
  GET_ALL_PROFILE,
  GET_ALL_PROFILE_ERROR,
  GET_ALL_PROFILE_LOADING,
} from "../Actions/allProfilesActions";

const initialState = {
  result: [],
  loading: false,
  error: false,
};

const allProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROFILE:
      return {
        ...state,
        result: action.payload,
      };
    case GET_ALL_PROFILE_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_ALL_PROFILE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};
export default allProfileReducer;

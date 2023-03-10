import {
  GET_JOBS,
  ADD_JOBS,
  REMOVE_JOBS,
  FILTERED_JOBS,
  LOADING_ON,
  LOADING_OFF,
  ERROR_ON,
  ERROR_OFF,
} from "../Actions/jobsActions";

const initialState = {
  jobsList: null,
  filteredJobsList: [],
  favouriteJobs: [],
  loading: false,
  error: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobsList: action.payload,
      };
    case FILTERED_JOBS:
      return {
        ...state,
        filteredJobsList: action.payload,
      };
    case ADD_JOBS:
      return {
        ...state,
        favouriteJobs: [...state.favouriteJobs, action.payload],
      };
    case REMOVE_JOBS:
      return {
        ...state,
        favouriteJobs: state.favouriteJobs.filter(
          (e) => e._id !== action.payload._id
        ),
      };
    case LOADING_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADING_OFF:
      return {
        ...state,
        loading: false,
      };
    case ERROR_ON:
      return { ...state, error: true };
    case ERROR_OFF:
      return { ...state, error: false };

    default:
      return state;
  }
};

export default jobsReducer;

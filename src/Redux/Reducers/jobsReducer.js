import {
  GET_JOBS,
  ADD_JOBS,
  REMOVE_JOBS,
  FILTERED_JOBS,
} from "../Actions/jobsActions";

const initialState = {
  jobsList: [],
  filteredJobsList: [],
  favouriteJobs: [],
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
        favouriteJobs: state.favouriteJobs.filter((e) => e !== action.payload),
      };

    default:
      return state;
  }
};

export default jobsReducer;

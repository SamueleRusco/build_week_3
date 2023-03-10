import {
  HOME,
  NETWORK,
  ME,
  JOBS,
  NOT_FOUND,
} from "../Actions/borderSelectorAction";

const initialState = {
  selector: "",
};

const borderReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME:
      return {
        ...state,
        selector: "home",
      };
    case NETWORK:
      return {
        ...state,
        selector: "network",
      };
    case ME:
      return {
        ...state,
        selector: "me",
      };
    case JOBS:
      return {
        ...state,
        selector: "jobs",
      };
    case NOT_FOUND:
      return {
        ...state,
        selector: "",
      };
    default:
      return state;
  }
};
export default borderReducer;

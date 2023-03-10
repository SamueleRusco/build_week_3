import { HOME, NETWORK, ME, JOBS } from "../Actions/borderSelectorAction";

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
    default:
      return state;
  }
};
export default borderReducer;

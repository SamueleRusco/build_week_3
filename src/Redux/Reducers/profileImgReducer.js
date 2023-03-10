import { PUT_PROFILE_IMG } from "../Actions/putProfileImg";
import { PUT_EXPERIENCE_IMG } from "../Actions/putProfileImg";
import { PUT_POST_IMG } from "../Actions/putProfileImg";
const initialState = {
  profileImg: [],
  experienceImg: [],
  postImg: [],
};

const imgReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_PROFILE_IMG:
      return {
        ...state,
        profileImg: action.payload,
      };
    case PUT_EXPERIENCE_IMG:
      return {
        ...state,
        profileImg: action.payload,
      };
    case PUT_POST_IMG:
      return {
        ...state,
        postImg: action.payload,
      };

    default:
      return state;
  }
};
export default imgReducer;

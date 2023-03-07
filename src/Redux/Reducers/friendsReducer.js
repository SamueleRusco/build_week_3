import { ADD_FRIENDS } from "../Actions/friendsActions";
import { REMOVE_FRIENDS } from "../Actions/friendsActions";

/* const content = "63fc659cf193e60013807f4d";
content; */
const initialState = {
  /* friendList: [], */

  friendIdList: [],
};

/* "63fc659cf193e60013807f4d" */
const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIENDS:
      return {
        ...state,
        /*  friendList: [...state.friendList, action.payload], */
        friendIdList: [...state.friendIdList, action.payload],
      };
    case REMOVE_FRIENDS:
      return {
        ...state,
        /* friendList: state.friendList.filter(
          (e) => e._id !== action.payload._id
        ), */
        friendIdList: state.friendIdList.filter((id) => id !== action.payload),
      };

    default:
      return state;
  }
};

export default friendsReducer;

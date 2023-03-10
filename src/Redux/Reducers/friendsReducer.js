import { ADD_FRIENDS } from "../Actions/friendsActions";
import { REMOVE_FRIENDS } from "../Actions/friendsActions";
const initialState = {
  friendIdList: [],
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIENDS:
      return {
        ...state,
        friendIdList: [...state.friendIdList, action.payload],
      };
    case REMOVE_FRIENDS:
      return {
        ...state,
        friendIdList: state.friendIdList.filter((id) => id !== action.payload),
      };

    default:
      return state;
  }
};

export default friendsReducer;

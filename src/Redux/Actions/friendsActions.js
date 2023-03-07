export const ADD_FRIENDS = "ADD_FRIENDS";
export const REMOVE_FRIENDS = "REMOVE_FRIENDS";

export const friendsAdderAction = (friend) => {
  return {
    type: ADD_FRIENDS,
    payload: friend,
  };
};
export const friendsRemoverAction = (friend) => {
  return {
    type: REMOVE_FRIENDS,
    payload: friend,
  };
};

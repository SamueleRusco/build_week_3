import {
  COMMENTI_FILTRATI_UTENTE,
  LISTA_COMMENTI,
} from "../Actions/postReducerActions";

const initialState = {
  commenti: [],
  commentiFiltrati: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTA_COMMENTI:
      return {
        ...state,
        commenti: action.payload.reverse(),
      };
    case COMMENTI_FILTRATI_UTENTE:
      return {
        ...state,
        commentiFiltrati: action.payload,
      };

    default:
      return state;
  }
};

export default postReducer;

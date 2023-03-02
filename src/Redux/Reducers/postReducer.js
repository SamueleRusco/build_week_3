import {
  ATTIVAZIONE,
  COMMENTI_FILTRATI_UTENTE,
  LISTA_COMMENTI,
} from "../Actions/postReducerActions";

const initialState = {
  loginId: "63fc659cf193e60013807f4d",
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

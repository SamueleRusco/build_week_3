export const ATTIVAZIONE = "ATTIVAZIONE";
export const LISTA_COMMENTI = "LISTA_COMMENTI";
export const COMMENTI_FILTRATI_UTENTE = "COMMENTI_FILTRATI_UTENTE";

// dispatch({
//   type: ATTIVAZIONE,
//   payload: 1 + 1,
// });

// export const sommaAction = (uno) => {
//   return {
//     type: ATTIVAZIONE,
//     payload: uno + uno,
//   };
// };

// dispatch(sommaAction(1));

export const listaCommentiAction = (commenti) => {
  return {
    type: LISTA_COMMENTI,
    payload: commenti,
  };
};

export const commentiFiltratiAction = (commenti) => {
  return {
    type: COMMENTI_FILTRATI_UTENTE,
    payload: commenti,
  };
};

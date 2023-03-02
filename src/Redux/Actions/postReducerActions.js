export const ATTIVAZIONE = "ATTIVAZIONE";
export const LISTA_COMMENTI = "LISTA_COMMENTI";
export const COMMENTI_FILTRATI_UTENTE = "COMMENTI_FILTRATI_UTENTE";

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

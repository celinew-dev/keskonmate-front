// === action types
export const DO_SOMETHING = 'DO_SOMETHING';
export const LOG_IN = 'LOG_IN';
export const ADD_SERIE_TO_LIST = 'ADD_SERIE_TO_LIST';
export const EDIT_USERLIST_SERIE = 'EDIT_USERLIST_SERIE';
export const DELETE_USERLIST_SERIE = 'DELETE_USERLIST_SERIE';

// === action creators
export const addSerieToList = (newSerieId, newSerieTitle, newSerieType) => ({
  type: ADD_SERIE_TO_LIST,
  serieId: newSerieId,
  serieTitle: newSerieTitle,
  serieType: newSerieType,
});

export const editUserlistSerie = (serieId, newSerieType) => ({
  type: EDIT_USERLIST_SERIE,
  serieId: serieId,
  serieType: newSerieType,
});

export const deleteUserlistSerie = (serieId) => ({
  type: DELETE_USERLIST_SERIE,
  serieId: serieId,
});

export const doSomething = (/* newValue */) => ({
  type: DO_SOMETHING,
  /* value: newValue, */
});

export const logIn = (/* newValue */) => ({
  type: LOG_IN,
  /* value: newValue, */
});

import { ADD_MENU, DELETE_MENU, REPLACE_MENU } from '../types';

export const addMenu = (data) => {
  return (dispatch) => {
    dispatch({ type: ADD_MENU, payload: data });
  };
};

export const deleteMenu = (idx) => {
  return (dispatch) => {
    dispatch({ type: DELETE_MENU, payload: idx });
  };
};

export const replaceMenu = (data) => {
  return (dispatch) => {
    dispatch({ type: REPLACE_MENU, payload: data });
  };
};

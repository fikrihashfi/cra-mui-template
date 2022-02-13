import { ADD_MENU, DELETE_MENU, REPLACE_MENU } from '../types';

export const addMenu = (data) => {
  return async (dispatch) => {
    dispatch({ type: ADD_MENU, payload: data });
  };
};

export const deleteMenu = (idx) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_MENU, payload: idx });
  };
};

export const replaceMenu = (data) => {
  return async (dispatch) => {
    dispatch({ type: REPLACE_MENU, payload: data });
  };
};

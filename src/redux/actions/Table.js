import { ADD_TABLE, DELETE_TABLE, REPLACE_TABLE } from '../types';

export const addTable = (data) => {
  return async (dispatch) => {
    dispatch({ type: ADD_TABLE, payload: data });
  };
};

export const deleteTable = (idx) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_TABLE, payload: idx });
  };
};

export const replaceTable = (data) => {
  return async (dispatch) => {
    dispatch({ type: REPLACE_TABLE, payload: data });
  };
};

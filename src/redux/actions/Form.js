import { CHANGE_FORM, CHANGE_FORM_ERROR, CLEAR_FORM, REPLACE_FORM, SET_LOADING_FORM } from '../types';

export const changeForm = (data) => {
  return (dispatch) => {
    dispatch({ type: CHANGE_FORM, payload: data });
  };
};

export const changeFormError = (data) => {
  return (dispatch) => {
    dispatch({ type: CHANGE_FORM_ERROR, payload: data });
  };
};

export const clearForm = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_FORM });
  };
};

export const replaceForm = (data) => {
  return (dispatch) => {
    dispatch({ type: REPLACE_FORM, payload: data });
  };
};

export const loadingForm = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING_FORM, payload: data });
  };
};

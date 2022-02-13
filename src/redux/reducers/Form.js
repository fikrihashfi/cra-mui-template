import { CHANGE_FORM, CHANGE_FORM_ERROR, CLEAR_FORM, REPLACE_FORM, SET_LOADING_FORM } from '../types';

const initialState = {
  loading: false,
  form: {},
  formError: {},
};

const form = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_FORM:
      let form = state.form;
      form[payload.name] = payload.value;
      return { ...state, form: { ...form } };

    case CHANGE_FORM_ERROR:
      let formError = state.formError;
      formError[payload.name] = payload.value;
      return { ...state, formError: { ...formError } };

    case CLEAR_FORM:
      let obj = {};
      return { ...state, form: { ...obj }, formError: { ...obj } };

    case REPLACE_FORM:
      return { ...state, form: { ...payload } };

    case SET_LOADING_FORM:
        return { ...state, loading: payload };
        
    default:
      return state;
  }
};

export default form;

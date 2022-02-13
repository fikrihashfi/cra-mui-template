import { ADD_CUSTOMER, DELETE_CUSTOMER, REPLACE_CUSTOMER } from '../types';

export const addCustomer = (data) => {
  return async (dispatch) => {
    dispatch({ type: ADD_CUSTOMER, payload: data });
  };
};

export const deleteCustomer = (idx) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_CUSTOMER, payload: idx });
  };
};

export const replaceCustomer = (data) => {
  return async (dispatch) => {
    dispatch({ type: REPLACE_CUSTOMER, payload: data });
  };
};

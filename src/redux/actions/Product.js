import { ADD_PRODUCT, REPLACE_PRODUCT, SET_LOADING_PRODUCT, UPDATE_PRODUCT } from '../types';
import axios from 'axios';
import { loadingForm, replaceForm } from './Form';

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(loadingProduct(true));
    axios
      .get('http://localhost:3000/products')
      .then((res) => {
        dispatch(replaceProduct(res.data.products));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(loadingProduct(false));
      });
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch(loadingForm(true));
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        dispatch(replaceForm(res.data));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(loadingForm(false));
      });
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(loadingProduct(true));
    axios
      .delete(`http://localhost:3000/products/delete/${id}`)
      .then((res) => {
        dispatch(loadingProduct(false));
        dispatch(getProducts());
      })
      .catch((err) => {
        console.log(err);
        dispatch(loadingProduct(false));
      });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    dispatch({ type: ADD_PRODUCT, payload: data });
  };
};

export const updateProduct = (data) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT, payload: data });
  };
};

export const replaceProduct = (data) => {
  return (dispatch) => {
    dispatch({ type: REPLACE_PRODUCT, payload: data });
  };
};

export const loadingProduct = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING_PRODUCT, payload: data });
  };
};

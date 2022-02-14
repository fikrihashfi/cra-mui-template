import { ADD_PRODUCT, REPLACE_PRODUCT, SET_LOADING_PRODUCT, SET_SNACKBAR } from '../types';
import { loadingForm, replaceForm } from './Form';
import client from '../../utils/fetcher';


export const getProducts = () => {
  return async (dispatch) => {
    dispatch(loadingProduct(true));
    client
      .get(`${process.env.REACT_APP_API_URL}/products`)
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
    client
      .get(`/products/${id}`)
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
    client
      .delete(`/products/delete/${id}`)
      .then((res) => {
        dispatch(loadingProduct(false));
        dispatch(setSnackbar({ open: true, message: "Delete Success !" }))
        dispatch(getProducts());
      })
      .catch((err) => {
        console.log(err);
        dispatch(loadingProduct(false));
      });
  };
};

export const updateProduct = ({ id, data }) => {
  return async (dispatch) => {
    dispatch(loadingForm(true));
    client
      .put(`/products/${id}`, data)
      .then((res) => {
        dispatch(replaceForm(res.data));
        dispatch(setSnackbar({ open: true, message: "Update Success !" }))
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(loadingForm(false));
      });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    dispatch({ type: ADD_PRODUCT, payload: data });
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

export const setSnackbar = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_SNACKBAR, payload: data });
  };
};

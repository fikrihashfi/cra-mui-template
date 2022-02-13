import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  REPLACE_PRODUCT,
  SET_LOADING_PRODUCT,
  UPDATE_PRODUCT,
} from '../types';

const initialState = {
  loading: false,
  header: ['#', 'Product Name'],
  data: [
    {
      id: '1',
      name: 'T01',
    },
  ],
};

const product = (state = initialState, { type, payload }) => {
  let data = state.data;
  let idx;
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, data: [...state.data, payload] };
    case UPDATE_PRODUCT:
      idx = data.findIndex((val) => val.id === payload.id);
      data[idx] = payload.data;
      return { ...state, data: [...data] };
    case DELETE_PRODUCT:
      idx = data.findIndex((val) => val.id === payload);
      data.splice(idx, 1);
      return { ...state, data: [...data] };
    case REPLACE_PRODUCT:
      return { ...state, data: [...payload] };
    case SET_LOADING_PRODUCT:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default product;

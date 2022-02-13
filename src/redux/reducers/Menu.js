import { ADD_MENU, DELETE_MENU, REPLACE_MENU } from '../types';

const initialState = {
  header: ['#', 'Name', 'Price', 'Action'],
  data: [
    {
      idMenu: 'M01',
      name: 'Ayam Bakar Pak Joni',
      price: 20000,
    },
  ],
};

const menu = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MENU:
      return { ...state, data: [...state.data, payload] };
    case DELETE_MENU:
      let data = state.data
      data.splice(payload, 1)
      return { ...state, data: [...data] };
    case REPLACE_MENU:
      return { ...state, data: [...payload] };
    default:
      return state;
  }
};

export default menu;

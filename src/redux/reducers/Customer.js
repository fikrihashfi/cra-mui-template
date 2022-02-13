import { ADD_CUSTOMER, DELETE_CUSTOMER, REPLACE_CUSTOMER } from '../types';

const initialState = {
  header: ['#', 'name', 'email', 'address'],
  data: [
    {
      idCustomer: 'C01',
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: 'Jakarta',
    },
  ],
};

const customer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CUSTOMER:
      return { ...state, data: [...state.data, payload] };
    case DELETE_CUSTOMER:
      let data = state.data;
      data.splice(payload, 1);
      return { ...state, data: [...data] };
    case REPLACE_CUSTOMER:
      return { ...state, data: [...payload] };
    default:
      return state;
  }
};

export default customer;

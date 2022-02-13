import { ADD_TABLE, DELETE_TABLE, REPLACE_TABLE } from '../types';

const initialState = {
  header: ['#', 'Table Number', 'Status', 'Action'],
  data: [
    {
      idTable: '1',
      tableNumber: 'T01',
      status: 1,
    },
  ],
};

const table = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TABLE:
      return { ...state, data: [...state.data, payload] };
    case DELETE_TABLE:
      let data = state.data;
      data.splice(payload, 1);
      return { ...state, data: [...data] };
    case REPLACE_TABLE:
      return { ...state, data: [...payload] };
    default:
      return state;
  }
};

export default table;

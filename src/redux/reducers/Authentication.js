import { SET_AUTH } from '../types';

const initialState = {
  isLogin: true, 
  user: {
      email: '',
  }
};

const menu = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH:
      return { ...state, isLogin: payload.isLogin, user: { ...payload.user } };

    default:
      return state;
  }
};

export default menu;

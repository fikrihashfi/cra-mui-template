import { SET_AUTH } from '../types';

export const setAuth = (data) => {
  return (dispatch, getState) => {
    if(data.isLogin===false) {
      let state = getState()
      localStorage.setItem(
        'allData',
        JSON.stringify({
          menus: state.menu.data,
          tables: state.table.data,
          customers: state.customer.data,
        })
      );
    }
    dispatch({ type: SET_AUTH, payload: data });
  };
};

import { combineReducers } from 'redux';
import menu from './Menu';
import auth from './Authentication';
import product from './Product';

const reducers = combineReducers({
  auth:  auth,
  menu:  menu,
  product:  product
})
  
export default reducers;
import { combineReducers } from 'redux';
import table from './Table';
import menu from './Menu';
import customer from './Customer';
import auth from './Authentication';
import form from './Form';
import product from './Product';

const reducers = combineReducers({
  auth:  auth,
  table: table,
  menu:  menu,
  form: form,
  customer:  customer,
  product:  product
})
  
export default reducers;
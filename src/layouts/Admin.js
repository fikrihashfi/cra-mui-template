import Navbar from '../components/common/Navbar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { replaceCustomer, replaceMenu, replaceTable } from '../redux/actions';

const Admin = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //mengambil data ketika setelah logout
    if (localStorage.getItem('allData') != null) {
      let savedState = JSON.parse(localStorage.getItem('allData'));
      if (savedState.tables) dispatch(replaceTable([...savedState.tables]));
      if (savedState.menus) dispatch(replaceMenu([...savedState.menus]));
      if (savedState.customers)
        dispatch(replaceCustomer([...savedState.customers]))
    }
  }, []);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Admin;

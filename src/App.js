import Login from './pages/Login';
import { Outlet, Route, Routes } from 'react-router-dom';
import RequireAuth from './middleware/authMiddleware';
import Menu from './pages/admin/Menu';
import Table from './pages/admin/Table';
import Customer from './pages/admin/Customer';
import Home from './pages/admin/Home';
import Layout from './layouts/Admin';
import NotFound from './pages/NotFound';
import Product from './pages/admin/Product';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/login' element={<Login/>} />
      <Route path="/admin" element={<RequireAuth><Layout><Outlet/></Layout></RequireAuth>}>
          <Route path="home" element={<Home/>} />
          <Route path="menu/*" element={<Menu/>} />
          <Route path="table/*" element={<Table />} />
          <Route path="customer/*" element={<Customer/>} />
          <Route path="product/*" element={<Product/>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

import { Outlet, Route, Routes } from 'react-router-dom';
import RequireAuth from '../middleware/authMiddleware';
import Menu from '../pages/admin/Menu';
import Home from '../pages/admin/Home';
import NotFound from '../pages/NotFound';
import Product from '../pages/admin/Product';
import Login from '../pages/Login';
import Layout from '../layouts/Admin';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/admin" element={<RequireAuth><Layout><Outlet/></Layout></RequireAuth>}>
          <Route path="home" element={<Home/>} />
          <Route path="menu/*" element={<Menu/>} />
          <Route path="product/*" element={<Product />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;

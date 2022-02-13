import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);
  
  if (!isLogin) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default RequireAuth;

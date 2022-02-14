import '../assets/css/login.css';
import Food from '../assets/images/food1.png';
import LoginForm from '../components/login/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(()=>{
    if(auth.isLogin){
      navigate('/admin/home')
    }
  },[])

  return (
    <Container disableGutters maxWidth='false'>
      <div
        id='login-wrapper'
        className='d-flex align-items-center justify-content-center'
      >
        <Card
          className='card-shaped flex-row flex-wrap m-2'
          style={{ minWidth: '25vw' }}
        >
          <CardContent
            className='text-center'
            style={{
              borderRight: '0.5px dashed grey',
              borderBottom: '0.5px dashed grey',
            }}
          >
            <img src={Food} alt="img" style={{ width: '200px', height: '200px' }} />
          </CardContent>
          <CardContent
            style={{
              borderLeft: '0.5px dashed grey',
              borderBottom: '0.5px dashed grey',
              maxWidth: '200px'
            }}
          >
            <Typography variant="h5" textAlign="center" m="15px">Login</Typography>
            <LoginForm/>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Login;

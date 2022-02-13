import '../assets/css/login.css';
import Card from '../components/common/card/Card';
import CardBody from '../components/common/card/CardBody';
import CardImage from '../components/common/card/CardImage';
import Container from '../components/common/Container';
import Food from '../assets/images/food1.png';
import LoginForm from '../components/login/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(()=>{
    if(auth.isLogin){
      navigate('/admin/home')
    }
  },[])

  return (
    <Container containerFluid={true}>
      <div
        id='login-wrapper'
        className='d-flex align-items-center justify-content-center'
      >
        <Card
          className='card-shaped flex-row flex-wrap m-2'
          style={{ minWidth: '25vw' }}
        >
          <CardBody
            titleCenter={true}
            className='text-center'
            style={{
              borderRight: '0.5px dashed grey',
              borderBottom: '0.5px dashed grey',
            }}
          >
            <CardImage src={Food} />
            <h3>WM BAKARI</h3>
          </CardBody>
          <CardBody
            title='Login'
            titleCenter={true}
            style={{
              borderLeft: '0.5px dashed grey',
              borderBottom: '0.5px dashed grey',
            }}
          >
            <LoginForm/>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
};

export default Login;

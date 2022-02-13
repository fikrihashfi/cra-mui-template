import React from 'react';
import '../../assets/css/banner.css';
import Container from '../common/Container';

const Banner = () => {
  return (
    <Container containerFluid={true}>
      <div
        id='banner'
        className='d-flex flex-column align-items-center justify-content-center'
      >
        <h1> WARUNG MAKAN BAKARI </h1>
      </div>
    </Container>
  );
};

export default Banner;

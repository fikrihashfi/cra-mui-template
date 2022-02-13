import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/footer.css';

const Footer = () => {
  return (
    <div id='footer'>
      <div
        id='footer-content'
        className='text-center'
        style={{ padding: '20px' }}
      >
        <p style={{ color: 'white', fontWeight: 'bold' }}>fikrihashfi@2022</p>
      </div>
    </div>
  );
};

export default Footer;

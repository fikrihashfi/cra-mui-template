import React from 'react';

const CardImage = (props) => {
  return (
    <img src={props.src} className='card-img' alt='card-img' height='200px' />
  );
};

export default CardImage;

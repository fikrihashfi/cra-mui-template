import React from 'react';

const Card = (props) => {
  return (
    <div
      className={`card m-2 ${props.className ?? ''}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;

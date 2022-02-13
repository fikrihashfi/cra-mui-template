import React from 'react';

const CardBody = (props) => {
  return (
    <div
      className={`card-body ${props.className ?? ''}`}
      style={props.style}
    >
      <h3
        className={`card-title ${props.titleCenter ? 'text-center' : ''}`}
      >
        {props.title}
      </h3>
      <p className={`card-text ${props.textCenter ? 'text-center' : ''}`}>
        {props.text}
      </p>
      {props.children}
    </div>
  );
};

export default CardBody;

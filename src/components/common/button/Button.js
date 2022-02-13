import React from 'react';
import '../../../assets/css/style.css';

const Button = (props) => {
  return (
    <button
      type={props.type ?? ''}
      className={`btn ${props.className ?? ''}`}
      onClick={() => {
        if (props.handleClick) {
          props.handleClick();
        }
      }}
      disabled={props.disabled === true ?? false}
    >
      {props.text}
    </button>
  );
};

export default Button;

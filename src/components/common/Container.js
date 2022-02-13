import React from 'react';

const Container = (props) => {
  return (
    <div
      id={props.id ?? ''}
      className={`${
        props.containerFluid === true ? 'container-fluid' : 'container'
      } ${props.className ?? ''}`}
      style={{
        minHeight: props.minHeight ?? '0',
        height: 'fit-content',
        padding: 0,
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;

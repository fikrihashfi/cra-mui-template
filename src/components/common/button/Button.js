import { Button } from '@mui/material';
import React from 'react';
import '../../../assets/css/style.css';

const CButton = (props) => {
  return (
    <Button
      variant='outlined'
      type={props.type ?? ''}
      onClick={() => {
        if (props.handleClick) {
          props.handleClick();
        }
      }}
      disabled={props.disabled === true ?? false}
      size={props.size??''}
      color={props.color??'primary'}
    >
      {props.text}
    </Button>
  );
};

export default CButton;

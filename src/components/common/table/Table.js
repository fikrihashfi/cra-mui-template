import React from 'react';

const Table = (props) => {
  return (
    <div className='table-responsive m-4'>
      <table className='table'>{props.children}</table>
    </div>
  );
};

export default Table;

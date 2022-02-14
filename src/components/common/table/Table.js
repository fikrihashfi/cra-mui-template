import { Table, TableContainer } from '@mui/material';
import React from 'react';

const CTable = (props) => {
  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">{props.children}</Table>
    </TableContainer>
  );
};

export default CTable;

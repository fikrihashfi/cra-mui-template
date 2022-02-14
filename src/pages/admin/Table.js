import { Box, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import FormTable from '../../components/table/FormTable';
import ListTable from '../../components/table/ListTable';

const Table = (props) => {
  return (
    <>
      <Container id={props.id ?? ''}>
        <Box p='50px'>
          <Routes>
            <Route path='/' element={<ListTable />} />
            <Route path='add' element={<FormTable />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
};

export default Table;

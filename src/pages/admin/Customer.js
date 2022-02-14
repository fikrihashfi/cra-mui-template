import { Box, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import FormCustomer from '../../components/customer/FormCustomer';
import ListCustomer from '../../components/customer/ListCustomer';

const Customer = (props) => {
  return (
    <>
      <Container id={props.id ?? ''}>
        <Box p='50px'>
          <Routes>
            <Route path='/' element={<ListCustomer />} />
            <Route path='add' element={<FormCustomer />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
};

export default Customer;

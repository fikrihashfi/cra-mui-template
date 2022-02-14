import { Container, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import FormProduct from '../../components/product/FormProduct';
import ListProduct from '../../components/product/ListProduct';

const Product = (props) => {
  return (
    <>
      <Container id={props.id ?? ''}>
        <Box p='50px'>
          <Routes>
            <Route path='/' element={<ListProduct />} />
            <Route path='add' element={<FormProduct />} />
            <Route path='edit/:id' element={<FormProduct />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
};

export default Product;

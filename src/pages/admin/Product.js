import { Container, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import ProductListBloc from '../../bloc/product/ProductListBloc';
import ListProduct from '../../components/product/ListProduct';

const Product = (props) => {
  return (
    <>
      <Container id={props.id ?? ''}>
        <Box p='50px'>
          <Routes>
            <Route path='/' element={<ListProduct bloc={() => ProductListBloc()} />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
};

export default Product;

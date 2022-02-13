import { Route, Routes } from 'react-router-dom';
import Container from '../../components/common/Container';
import FormProduct from '../../components/product/FormProduct';
import ListProduct from '../../components/product/ListProduct';

const Product = (props) => {
  return (
    <>
      <Container id={props.id ?? ''} minHeight='80vh' className={'p-4'}>
        <Routes>
          <Route path='/' element={<ListProduct />} />
          <Route path='add' element={<FormProduct />} />
          <Route path='edit/:id' element={<FormProduct />} />
        </Routes>
      </Container>
    </>
  );
};

export default Product;
  
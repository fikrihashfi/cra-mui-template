import { Route, Routes } from 'react-router-dom';
import Container from '../../components/common/Container';
import FormCustomer from '../../components/customer/FormCustomer';
import ListCustomer from '../../components/customer/ListCustomer';

const Customer = (props) => {
  return (
    <>
      <Container id={props.id ?? ''} minHeight='80vh' className={'p-4'}>
        <Routes>
          <Route path='/' element={<ListCustomer />} />
          <Route path='add' element={<FormCustomer />} />
        </Routes>
      </Container>
    </>
  );
};

export default Customer;

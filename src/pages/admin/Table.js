import { Route, Routes } from 'react-router-dom';
import Container from '../../components/common/Container';
import FormTable from '../../components/table/FormTable';
import ListTable from '../../components/table/ListTable';

const Table = (props) => {
  return (
    <>
      <Container id={props.id ?? ''} minHeight='80vh' className={'p-4'}>
        <Routes>
          <Route path='/' element={<ListTable />} />
          <Route path='add' element={<FormTable />} />
        </Routes>
      </Container>
    </>
  );
};

export default Table;
  
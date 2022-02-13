import { Route, Routes } from 'react-router-dom';
import Container from '../../components/common/Container';
import FormMenu from '../../components/menu/FormMenu';
import ListMenu from '../../components/menu/ListMenu';

const Menu = (props) => {
  return (
    <>
      <Container id={props.id ?? ''} minHeight='80vh' className={'p-4'}>
        <Routes>
          <Route path='/' element={<ListMenu />} />
          <Route path='add' element={<FormMenu />} />
        </Routes>
      </Container>
    </>
  );
};

export default Menu;
  
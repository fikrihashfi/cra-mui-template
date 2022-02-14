import { Container, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import FormMenu from '../../components/menu/FormMenu';
import ListMenu from '../../components/menu/ListMenu';

const Menu = (props) => {
  return (
    <>
      <Container  id={props.id ?? ''}>
        <Box p="50px">
          <Routes>
            <Route path='/' element={<ListMenu />} />
            <Route path='add' element={<FormMenu />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
};

export default Menu;
  
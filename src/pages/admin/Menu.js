import { Container, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import MenuListBloc from '../../bloc/menu/MenuListBloc';
import ListMenu from '../../components/menu/ListMenu';

const Menu = (props) => {
  return (
    <>
      <Container  id={props.id ?? ''}>
        <Box p="50px">
          <Routes>
            <Route path='/' element={<ListMenu bloc={() => MenuListBloc()} />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
};

export default Menu;
  
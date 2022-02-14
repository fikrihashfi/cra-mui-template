import { useDispatch, useSelector } from 'react-redux';
import { addMenu, deleteMenu } from '../../redux/actions';

const MenuListBloc = () => {

  const menu = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  const handleAdd = (values) => {
    dispatch(addMenu(values));
  }

  const handleDelete = (idx) => {
    dispatch(deleteMenu(idx));
  };

  return { handleAdd, menu, handleDelete };
};

export default MenuListBloc;

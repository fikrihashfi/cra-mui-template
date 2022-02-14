import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, getProducts, getProductById } from '../../redux/actions';

const ProductListBloc = () => {

  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const getListProducts = () => {
    dispatch(getProducts())
  }

  const getProduct = (id) => {
    return dispatch(getProductById(id))
  }

  const handleAdd = (values) => {
    dispatch(addProduct(values));
  }

  const handleDelete = (idx) => {
    dispatch(deleteProduct(idx));
  };

  return { getListProducts, handleAdd, product, handleDelete, getProduct };
};

export default ProductListBloc;

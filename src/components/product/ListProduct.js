import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct, getProducts } from '../../redux/actions/Product';
import Button from '../common/button/Button';
import Table from '../common/table/Table';
import TableBody from '../common/table/TableBody';
import TableHead from '../common/table/TableHead';

const ListProduct = () => {
  const product = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Table>
        <TableHead>
          {product.header ? (
            <tr>
              {product.header.map((val, idx) => {
                return <td key={idx}>{val}</td>;
              })}
            </tr>
          ) : (
            ''
          )}
        </TableHead>
        <TableBody>
          {!product.loading ? (
            product.data ? (
              product.data.map((val, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{val.name}</td>
                    <td>
                    <Button
                      handleClick={() => {
                        navigate(`edit/${val.id}`)
                      }}
                      text='Update'
                      className='btn-warning m-1 btn-sm text-white'
                    ></Button>
                    <Button
                      handleClick={() => {
                        if(window.confirm('Are you sure want to delete?'))
                          dispatch(deleteProduct(val.id));
                      }}
                      text='Delete'
                      className='btn-danger m-1 btn-sm'
                    ></Button>
                  </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={2} align={'center'}>
                  No Data Available !
                </td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan={2} align={'center'}>
                Loading...
              </td>
            </tr>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default ListProduct;

import { TableCell, TableRow, Button, Alert, Snackbar } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  deleteProduct,
  getProducts,
  setSnackbar,
} from '../../redux/actions/Product';
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
            <TableRow>
              {product.header.map((val, idx) => {
                return <TableCell key={idx}>{val}</TableCell>;
              })}
            </TableRow>
          ) : (
            ''
          )}
        </TableHead>
        <TableBody>
          {!product.loading ? (
            product.data ? (
              product.data.map((val, idx) => {
                return (
                  <TableRow key={idx}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          navigate(`edit/${val.id}`);
                        }}
                        sx={{ margin: '2px' }}
                        size='small'
                        variant='outlined'
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => {
                          if (window.confirm('Are you sure want to delete?'))
                            dispatch(deleteProduct(val.id));
                        }}
                        sx={{ margin: '2px' }}
                        size='small'
                        margin='2px'
                        variant='outlined'
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={2} align={'center'}>
                  No Data Available !
                </TableCell>
              </TableRow>
            )
          ) : (
            <TableRow>
              <TableCell colSpan={3} align={'center'}>
                Loading...
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Snackbar
        style={{ top: '90px' }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={product.snackbar.open}
        onClose={() => dispatch(setSnackbar({ open: false, message: '' }))}
        autoHideDuration={2000}
      >
        <Alert severity='success' sx={{ width: '100%' }}>
          {product.snackbar.message ?? ''}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ListProduct;

import {
  TableContainer,
  TableCell,
  TableRow,
  Table,
  TableBody,
  TableHead,
  Modal,
  Button,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import FormProduct from './FormProduct';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

const ListProduct = ({ bloc }) => {
  const [modal, setModal] = useState(false);
  const [editedData, setEditedData] = useState({});
  const handleModal = (status) => {
    setModal(status);
  };

  const { getListProducts, product, handleDelete, handleAdd, getProduct } =
    bloc();

  useEffect(() => {
    getListProducts();
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          setEditedData({});
          handleModal(true);
        }}
      >
        Add Product
      </Button>
      <TableContainer sx={{ maxHeight: 440 }}>
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
            {product.data && product.data.length > 0 ? (
              product.data.map((val, idx) => {
                return (
                  <TableRow key={idx}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          setEditedData(val);
                          handleModal(true);
                        }}
                        size='small'
                        color='warning'
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => {
                          handleDelete(idx);
                        }}
                        size='small'
                        color='warning'
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={4} align={'center'}>
                  No Data Available !
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={modal}
        onClose={() => handleModal(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle} gap='20px'>
          <Typography variant='h5' textAlign='center'>
            Add Product
          </Typography>
          <FormProduct
            editedData={editedData}
            handleAdd={handleAdd}
            handleModal={handleModal}
            getProduct={getProduct}
          />
        </Box>
      </Modal>
    </>
  );
};

export default ListProduct;

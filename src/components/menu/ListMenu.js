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
import { useState } from 'react';
import FormMenu from './FormMenu';

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

const ListMenu = ({ bloc }) => {
  const [modal, setModal] = useState(false);
  const { menu, handleDelete, handleAdd } = bloc();

  const handleModal = (status) => {
    setModal(status);
  };

  return (
    <>
      <Button onClick={() => handleModal(true)}>Add Menu</Button>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead>
            {menu.header ? (
              <TableRow>
                {menu.header.map((val, idx) => {
                  return <TableCell key={idx}>{val}</TableCell>;
                })}
              </TableRow>
            ) : (
              ''
            )}
          </TableHead>
          <TableBody>
            {menu.data && menu.data.length > 0 ? (
              menu.data.map((val, idx) => {
                return (
                  <TableRow key={idx}>
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>Rp.{val.price},-</TableCell>
                    <TableCell>
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
            Add Menu
          </Typography>
          <FormMenu handleAdd={handleAdd} />
        </Box>
      </Modal>
    </>
  );
};

export default ListMenu;

import { useDispatch } from 'react-redux';
import { addMenu } from '../../redux/actions';
import Form from '../common/form/Form';
import { useFormik } from 'formik';
import { Grid, TextField, Button } from '@mui/material';
import { menuValidationSchema } from '../../utils/validations';

const FormMenu = (props) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      idMenu: '',
      name: '',
      price: '',
    },
    validationSchema: menuValidationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addMenu(values));
      resetForm();
      if (props.setModal) props.setModal(false);
    },
  });

  return (
    <>
      <Form handleFormSubmit={formik.handleSubmit} defaultBtn={false}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <TextField
              fullWidth
              id='idMenu'
              name='idMenu'
              label='ID Menu'
              value={formik.values.idMenu}
              onChange={formik.handleChange}
              error={formik.touched.idMenu && Boolean(formik.errors.idMenu)}
              helperText={formik.touched.idMenu && formik.errors.idMenu}
              variant='standard'
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              id='name'
              name='name'
              label='Name'
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              variant='standard'
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              id='price'
              name='price'
              label='Price'
              type='number'
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              variant='standard'
            ></TextField>
          </Grid>
          <Grid item md={12} marginTop='10px'>
            <div style={{ textAlign: 'right' }}>
              <Button
                onClick={() => {
                  if (props.setModal) props.setModal(false);
                }}
                type='button'
                color='warning'
                variant='contained'
                style={{ margin: '2px' }}
              >
                Cancel
              </Button>
              <Button
                type='submit'
                color='success'
                variant='contained'
                style={{ margin: '2px' }}
              >
                Save
              </Button>
            </div>
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default FormMenu;

import Form from '../common/form/Form';
import { Grid, TextField, Button } from '@mui/material';
import { productValidationSchema } from '../../utils/validations';
import { useFormik } from 'formik';
import { useEffect } from 'react';

const FormProduct = ({ getProduct, editedData, handleAdd, handleModal }) => {
  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
    },
    validationSchema: productValidationSchema,
    onSubmit: (values, { resetForm }) => {
      handleAdd(values);
      resetForm();
      if (handleModal) handleModal(false);
    },
  });

  useEffect(() => {
    if (editedData.id != null) {
      getProduct(editedData.id).then((val) => {
        formik.setValues(val.data);
      });
    }
  }, [editedData.id]);

  return (
    <>
      <Form handleFormSubmit={formik.handleSubmit} defaultBtn={false}>
        <Grid container spacing={1}>
          <Grid item md={12}>
            <TextField
              fullWidth
              id='id'
              name='id'
              label='ID Product'
              value={formik.values.id}
              onChange={formik.handleChange}
              error={formik.touched.id && Boolean(formik.errors.id)}
              helperText={formik.touched.id && formik.errors.id}
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
          <Grid item md={12} marginTop='10px'>
            <div style={{ textAlign: 'right' }}>
              <Button
                onClick={() => {
                  if (handleModal) handleModal(false);
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

export default FormProduct;

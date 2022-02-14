import { Button, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../../redux/actions/Authentication';
import { loginValidationSchema } from '../../utils/validations';
import Form from '../common/form/Form';
import { useFormik } from 'formik';

const LoginForm = () => {
  const [state, setState] = useState({
    loginDisabled: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values, { resetForm }) => {
      if (formik.values.email === 'admin@example.com' && formik.values.password === '12345678') {
        dispatch(
          setAuth({
            isLogin: true,
            user: { email: formik.values.email },
          })
        );
        resetForm()
        navigate('/admin/home');
      } else {
        alert('invalid username / password')
      }
    },
  });

  return (
    <Form handleFormSubmit={formik.handleSubmit} defaultBtn={false}>
      <Grid container spacing={1}>
        <Grid item md={12}>
          <TextField
            fullWidth
            id='email'
            name='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.email)}
            helperText={formik.errors.email}
            variant='standard'
          ></TextField>
        </Grid>
        <Grid item md={12}>
          <TextField
            fullWidth
            id='password'
            name='password'
            label='Password'
            type='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            variant='standard'
          ></TextField>
        </Grid>
      </Grid>
      <div style={{ marginTop: '20px' }}>
        <Button type='submit' disabled={!formik.isValid} variant="outlined">
          Login
        </Button>
        <p className='text-muted' style={{ fontSize: '13px' }}>
          forgot password ? <a href='#click'>Click Here</a>
        </p>
      </div>
    </Form>
  );
};

export default LoginForm;

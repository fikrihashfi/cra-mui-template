import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../../redux/actions/Authentication';
import { changeFormError, clearForm } from '../../redux/actions/Form';
import { login } from '../../utils/validations';
import Button from '../common/button/Button';
import Form from '../common/form/Form';
import Input from '../common/form/Input';

const LoginForm = () => {
  const [state, setState] = useState({
    loginDisabled: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { form, formError } = useSelector((state) => state.form);
  const changeInputValidation = (form) => dispatch(changeFormError(form));

  const checkDisableButton = () => {
    if (formError.email === '' && formError.password === '') {
      setState({ loginDisabled: false });
    } else {
      setState({ loginDisabled: true });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (login.validate(form, changeInputValidation)) {
      if (form.email === 'admin@example.com' && form.password === '12345678') {
        dispatch(
          setAuth({
            isLogin: true,
            user: { email: form.email },
          })
        );
        dispatch(clearForm());
        navigate('/admin/home');
      } else {
        dispatch(
          changeFormError({
            name: 'password',
            value: 'Incorrect login username or password',
          })
        );
        checkDisableButton();
      }
    } else {
      checkDisableButton();
    }
  };

  useEffect(() => {
    dispatch(clearForm());
  }, []);

  return (
    <Form handleFormSubmit={handleFormSubmit} defaultBtn={false}>
      <TextField
        id='email'
        label='Email'
        error={formError.email}
        value={form.email}
        validation={() => {
          login.validateEmail(form, changeInputValidation);
          checkDisableButton();
        }}
      ></TextField>
      <TextField
        id='password'
        label='Password'
        type='password'
        error={formError.password}
        value={form.password}
        validation={() => {
          login.validatePassword(form, changeInputValidation);
          checkDisableButton();
        }}
      ></TextField>
      <div className='d-flex flex-column justify-content-center'>
        <Button
          text='Login'
          className='btn-primary'
          type='submit'
          disabled={state.loginDisabled}
        />
        <p className='text-muted' style={{ fontSize: '13px' }}>
          forgot password ? <a href='#click'>Click Here</a>
        </p>
      </div>
    </Form>
  );
};

export default LoginForm;

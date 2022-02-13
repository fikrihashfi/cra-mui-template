import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../../redux/actions';
import {
  changeFormError,
  clearForm,
} from '../../redux/actions/Form';
import { pages } from '../../utils/params';
import { customer, validations } from '../../utils/validations';
import Button from '../common/button/Button';
import Form from '../common/form/Form';
import Input from '../common/form/Input';

const FormCustomer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, formError } = useSelector((state) => state.form);
  const inputValidationChange = (data) => dispatch(changeFormError(data))

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validations[pages.customer].validate(form, inputValidationChange)) {
      dispatch(addCustomer(form));
      dispatch(clearForm());
      navigate('/admin/customer');
    }
  };

  useEffect(() => {
    dispatch(clearForm());
  }, []);

  return (
    <>
      <Form handleFormSubmit={handleFormSubmit} defaultBtn={false}>
        <Input
          id='idCustomer'
          label='ID Customer'
          error={formError.idCustomer}
          placeholder='Enter ID'
          value={form.idCustomer}
          validation={() => customer.validateIdCustomer(form, inputValidationChange)}
        ></Input>
        <Input
          id='name'
          label='Name'
          error={formError.name}
          placeholder='Enter Name'
          value={form.name}
          validation={() => customer.validateName(form, inputValidationChange)}
        ></Input>
        <Input
          id='email'
          label='Email'
          type='email'
          error={formError.email}
          placeholder='Enter email'
          value={form.email}
          validation={() => customer.validateEmail(form, inputValidationChange)}
        ></Input>
        <Input
          id='address'
          label='address'
          type='text'
          error={formError.address}
          placeholder='Enter address'
          value={form.address}
          validation={() => customer.validateAddress(form, inputValidationChange)}
        ></Input>
        <div>
          <Button
            handleClick={() => {
              navigate('/admin/customer');
            }}
            type='button'
            text='Cancel'
            className='btn-warning text-white m-2'
          />
          <Button type='submit' text='Save' className='btn-success m-2' />
        </div>
      </Form>
    </>
  );
};

export default FormCustomer;

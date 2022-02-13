import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMenu } from '../../redux/actions';
import {
  changeFormError,
  clearForm,
} from '../../redux/actions/Form';
import { pages } from '../../utils/params';
import { menu, validations } from '../../utils/validations';
import Button from '../common/button/Button';
import Form from '../common/form/Form';
import Input from '../common/form/Input';

const FormMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, formError } = useSelector((state) => state.form);
  const changeInputValidation = (form) => dispatch(changeFormError(form));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validations[pages.menu].validate(form, changeInputValidation)) {
      dispatch(addMenu(form));
      dispatch(clearForm());
      navigate('/admin/menu');
    }
  };

  useEffect(() => {
    dispatch(clearForm());
  }, []);

  return (
    <>
      <Form handleFormSubmit={handleFormSubmit} defaultBtn={false}>
        <Input
          id='idMenu'
          label='ID Menu'
          error={formError.idMenu}
          placeholder='Enter ID'
          value={form.idMenu}
          validation={() => menu.validateIdMenu(form, changeInputValidation)}
        ></Input>
        <Input
          id='name'
          label='Name'
          error={formError.name}
          placeholder='Enter Name'
          value={form.name}
          validation={() => menu.validateName(form, changeInputValidation)}
        ></Input>
        <Input
          id='price'
          label='Price'
          type='number'
          error={formError.price}
          placeholder='Enter Price'
          value={form.price}
          validation={() => menu.validatePrice(form, changeInputValidation)}
        ></Input>
        <div>
          <Button
            handleClick={() => {
              navigate('/admin/menu');
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

export default FormMenu;

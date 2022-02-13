import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  changeFormError,
  clearForm,
} from '../../redux/actions/Form';
import { addProduct, getProduct, updateProduct } from '../../redux/actions/Product';
import { pages } from '../../utils/params';
import { validations } from '../../utils/validations';
import Button from '../common/button/Button';
import Form from '../common/form/Form';
import Input from '../common/form/Input';

const FormProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const { loading, form, formError } = useSelector((state) => state.form);
  const inputValidationChange = (data) => dispatch(changeFormError(data))

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validations[pages.product].validate(form, inputValidationChange)) {
      if (params.id) {
        dispatch(updateProduct({ id:params.id, data: form }));
      } else {
        dispatch(addProduct(form));
      }
      dispatch(clearForm());
      navigate('/admin/product');
    }
  };

  useEffect(() => {
    dispatch(clearForm());
    if (params.id) {
      dispatch(getProduct(params.id));
    }
  }, []);

  return (
    <>
      {loading ? (
        'Loading data....'
      ) : (
        <Form handleFormSubmit={handleFormSubmit} defaultBtn={false}>
          <Input
            id='id'
            name='id'
            label='ID Product'
            error={formError.id}
            placeholder='Enter ID'
            value={form.id}
            validation={() => {}}
          ></Input>
          <Input
            id='name'
            name='name'
            label='Name'
            error={formError.name}
            placeholder='Enter Name'
            value={form.name}
            validation={() => {}}
          ></Input>
          <div>
            <Button
              handleClick={() => {
                navigate('/admin/product');
              }}
              type='button'
              text='Cancel'
              className='btn-warning text-white m-2'
            />
            <Button type='submit' text='Save' className='btn-success m-2' />
          </div>
        </Form>
      )}
    </>
  );
};

export default FormProduct;

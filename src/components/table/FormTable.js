import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTable } from '../../redux/actions';
import {
  changeFormError,
  clearForm,
} from '../../redux/actions/Form';
import { pages, tableStatus } from '../../utils/params';
import { table, validations } from '../../utils/validations';
import Button from '../common/button/Button';
import Form from '../common/form/Form';
import Input from '../common/form/Input';
import Select from '../common/form/Select';

const FormTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, formError } = useSelector((state) => state.form);
  const changeInputValidation = (form) => dispatch(changeFormError(form));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validations[pages.table].validate(form, changeInputValidation)) {
      dispatch(addTable(form));
      dispatch(clearForm());
      navigate('/admin/table');
    }
  };

  useEffect(() => {
    dispatch(clearForm());
  }, []);

  return (
    <>
      <Form handleFormSubmit={handleFormSubmit} defaultBtn={false}>
        <Input
          id='idTable'
          name='idTable'
          label='ID Table'
          error={formError.idTable}
          placeholder='Enter ID'
          value={form.idTable}
          validation={() => table.validateIdTable(form, changeInputValidation)}
        ></Input>
        <Input
          id='tableNumber'
          name='tableNumber'
          label='Table Number'
          error={formError.tableNumber}
          placeholder='Enter Number'
          value={form.tableNumber}
          validation={() => table.validateNumber(form, changeInputValidation)}
        ></Input>
        <Select
          id='status'
          name='status'
          label='Status'
          options={tableStatus}
          error={formError.status}
          value={form.status}
          validation={() => table.validateStatus(form, changeInputValidation)}
        ></Select>
        <div>
          <Button
            handleClick={() => {
              navigate('/admin/table');
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

export default FormTable;

import * as yup from 'yup';

export const menuValidationSchema = yup.object({
  idMenu: yup.string('Enter id').required('ID is required'),
  name: yup.string('Enter name').required('Name is required'),
  price: yup.string('Enter Price').required('Price is required'),
});

export const productValidationSchema = yup.object({
  id: yup.string('Enter id').required('ID is required'),
  name: yup.string('Enter name').required('Name is required')
});

export const loginValidationSchema = yup.object({
  email: yup.string('Enter email').email('Must be a valid Email').required('Email is required'),
  password: yup.string('Enter password').required('Password is required')
});

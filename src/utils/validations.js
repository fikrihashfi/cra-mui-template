import * as yup from 'yup';

export const menuValidationSchema = yup.object({
  idMenu: yup.string('Enter id').required('ID is required'),
  name: yup.string('Enter name').required('Name is required'),
  price: yup.string('Enter Price').required('Price is required'),
});


export const login = {
  validate(form, changeFormError) {
    let validateEmail = this.validateEmail(form, changeFormError);
    let validatePassword = this.validatePassword(form, changeFormError);
    return validateEmail && validatePassword;
  },

  validateEmail(form, changeFormError) {
    let isValid = true;

    let emailPattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (!emailPattern.test(form.email)) {
      changeFormError({ name: 'email', value: 'Invalid email format !' });
      isValid = false;
    } else {
      changeFormError({ name: 'email', value: '' });
      isValid = true;
    }

    return isValid;
  },
  validatePassword(form, changeFormError) {
    let isValid = true;
    if (!form.password || form.password.length < 6) {
      changeFormError({
        name: 'password',
        value: '6 min length character !',
      });
      isValid = false;
    } else {
      changeFormError({ name: 'password', value: '' });
      isValid = true;
    }
    return isValid;
  },
};

export const menu = {
  validate(form, changeFormError) {
    let validateIdMenu = this.validateIdMenu(form, changeFormError);
    let validateName = this.validateName(form, changeFormError);
    let validatePrice = this.validatePrice(form, changeFormError);
    return validateIdMenu && validateName && validatePrice;
  },

  validateIdMenu(form, changeFormError) {
    let isValid = true;
    if (!form.idMenu || form.idMenu.trim().length < 1) {
      changeFormError({ name: 'idMenu', value: 'required field !' });
      isValid = false;
    } else {
      changeFormError({ name: 'idMenu', value: '' });
      isValid = true;
    }
    return isValid;
  },

  validateName(form, changeFormError) {
    let isValid = true;
    if (!form.name || form.name.trim().length < 1) {
      changeFormError({ name: 'name', value: 'required field !' });
      isValid = false;
    } else {
      changeFormError({ name: 'name', value: '' });
      isValid = true;
    }
    return isValid;
  },

  validatePrice(form, changeFormError) {
    let isValid = true;
    if (!form.price || form.price.trim().length < 1) {
      changeFormError({ name: 'price', value: 'required field !' });
      isValid = false;
    } else {
      changeFormError({ name: 'price', value: '' });
      isValid = true;
    }
    return isValid;
  },
};

export const table = {
  validate(form, changeFormError) {
    let validateIdTable = this.validateIdTable(form, changeFormError);
    let validateNumber = this.validateNumber(form, changeFormError);
    let validateStatus = this.validateStatus(form, changeFormError);
    return validateIdTable && validateNumber && validateStatus;
  },

  validateIdTable(form, changeFormError) {
    let isValid = true;
    if (!form.idTable || form.idTable.trim().length < 1) {
      changeFormError({ name: 'idTable', value: 'required field !' });
      isValid = false;
    } else {
      changeFormError({ name: 'idTable', value: '' });
      isValid = true;
    }
    return isValid;
  },

  validateNumber(form, changeFormError) {
    let isValid = true;
    if (!form.tableNumber || form.tableNumber.trim().length < 1) {
      changeFormError({ name: 'tableNumber', value: 'required field !' });
      isValid = false;
    } else {
      changeFormError({ name: 'tableNumber', value: '' });
      isValid = true;
    }
    return isValid;
  },

  validateStatus(form, changeFormError) {
    let isValid = true;
    if (!form.status || form.status.trim().length < 1) {
      changeFormError({ name: 'status', value: 'required field !' });
      isValid = false;
    } else {
      changeFormError({ name: 'status', value: '' });
      isValid = true;
    }
    return isValid;
  },
};

export const customer = {
  validate(form, changeFormError) {
    let validateEmail = this.validateEmail(form, changeFormError);
    let validateIdCustomer = this.validateIdCustomer(form, changeFormError);
    let validateName = this.validateName(form, changeFormError);
    let validateAddress = this.validateAddress(form, changeFormError);
    return (
      validateEmail && validateIdCustomer && validateName && validateAddress
    );
  },

  validateEmail(form, changeFormError) {
    let isValid = true;

    let emailPattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (!form.email) {
      changeFormError({ name: 'email', value: 'required field !' });
      isValid = false;
    } else {
      if (!emailPattern.test(form.email)) {
        changeFormError({
          name: 'email',
          value: 'Invalid email format !',
        });
        isValid = false;
      } else {
        changeFormError({ name: 'email', value: '' });
        isValid = true;
      }
    }

    return isValid;
  },

  validateIdCustomer(form, changeFormError) {
    let isValid = true;
    if (!form.idCustomer || form.idCustomer.trim().length < 1) {
      changeFormError({ name: 'idCustomer', value: 'required field !' });
      isValid = false;
    } else {
      changeFormError({ name: 'idCustomer', value: '' });
      isValid = true;
    }
    return isValid;
  },

  validateName(form, changeFormError) {
    let isValid = true;
    if (!form.name || form.name.trim().length < 1) {
      changeFormError({ name: 'name', value: 'required field !' });
      isValid = false;
    } else {
      changeFormError({ name: 'name', value: '' });
      isValid = true;
    }
    return isValid;
  },

  validateAddress(form, changeFormError) {
    let isValid = true;
    if (!form.address || form.address.trim().length < 1) {
      changeFormError({ name: 'address', value: 'required field !' });
      isValid = false;
    } else {
      changeFormError({ name: 'address', value: '' });
      isValid = true;
    }
    return isValid;
  },
};

export const product = {
  validate(form, changeFormError) {
    return true;
  },
};

export const validations = {
  Login: login,
  Table: table,
  Menu: menu,
  Customer: customer,
  Product: product
};

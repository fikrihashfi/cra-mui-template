import { FormControl, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../../redux/actions/Form';

const Input = (props) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // props.value.setState(e.target.id, e.target.value);
    dispatch(changeForm({ name: e.target.name, value: e.target.value }));
    if (props.validation) props.validation();
  };

  return (
      <FormControl className="mb-3">
        <TextField
          error={props.error?true:false}
          id={props.id??''}
          name={props.name??''}
          label={props.label??''}
          value={props.value??''}
          onChange={handleChange}
          helperText={props.error??''}
          variant='standard'
          placeholder={props.placeholder??''}
        />
      </FormControl>
  );
};

export default Input;

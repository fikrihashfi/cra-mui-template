import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeForm } from '../../../redux/actions/Form';

const CSelect = (props) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeForm({ name: e.target.name, value: e.target.value }));
    if (props.validation) props.validation();
  };

  return (
    <FormControl error={props.error ? true : false}>
      <InputLabel htmlFor={props.id} variant="standard">
        {props.label ?? ''}
      </InputLabel>
      <Select
        className="form-select"
        id={props.id ?? ''}
        name={props.name ?? ''}
        aria-describedby={props.id ?? ''}
        value={props.value??''}
        onChange={handleChange}
        placeholder={props.placeholder ?? ''}
        variant='standard'
        label={props.label ?? ''}
      >
        <MenuItem value="">-- select --</MenuItem>
        {props.options.map((val, idx) => {
          return (
            <MenuItem key={idx} value={val.value}>
              {val.text}
            </MenuItem>
          );
        })}
      </Select>
      {props.error == null ? (
        ''
      ) : (
        <FormHelperText variant='standard'>{props.error ?? ''}</FormHelperText>
      )}
    </FormControl>
  );
};

export default CSelect;

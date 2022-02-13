import { useDispatch } from 'react-redux';
import { changeForm } from '../../../redux/actions/Form';

const Input = (props) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    // props.value.setState(e.target.id, e.target.value);
    dispatch(changeForm({ name: e.target.id, value: e.target.value }));
    if (props.validation) props.validation();
  };

  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label ?? ''}
      </label>
      <input
        type={props.type ?? 'text'}
        className="form-control"
        id={props.id ?? ''}
        aria-describedby={props.id ?? ''}
        value={props.value ?? ''}
        onChange={handleChange}
        min={props.min ?? ''}
        max={props.max ?? ''}
        placeholder={props.placeholder}
      />
      {props.error == null ? (
        ''
      ) : (
        <div
          id="nameHelp"
          className="form-text"
          style={{ color: 'red', fontSize: '12px' }}
        >
          {props.error ?? ''}
        </div>
      )}
    </div>
  );
};

export default Input;

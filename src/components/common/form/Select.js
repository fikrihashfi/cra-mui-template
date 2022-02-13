import { useDispatch } from "react-redux";
import { changeForm } from "../../../redux/actions/Form";

const Select = (props) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeForm({ name: e.target.id, value: e.target.value }));
    if (props.validation) props.validation();
  };

  return (
    <div className='mb-3'>
      <label htmlFor={props.id} className='form-label'>
        {props.label ?? ''}
      </label>
      <select
        className='form-select'
        id={props.id ?? ''}
        aria-describedby={props.id ?? ''}
        value={props.value}
        onChange={handleChange}
        placeholder={props.placeholder}
      >
        <option value=''>-- select --</option>
        {props.options.map((val, idx) => {
          return (
            <option key={idx} value={val.value}>
              {val.text}
            </option>
          );
        })}
      </select>
      {props.error == null ? (
        ''
      ) : (
        <div
          id='nameHelp'
          className='form-text'
          style={{ color: 'red', fontSize: '12px' }}
        >
          {props.error}
        </div>
      )}
    </div>
  );
};

export default Select;

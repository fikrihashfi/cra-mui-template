import Button from '../button/Button';

const Form = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit} className='mb-4'>
      {props.children}
      {props.defaultBtn === true ? (
        <Button
          type='submit'
          className='btn-success'
          text={props.buttonText}
        />
      ) : (
        ''
      )}
    </form>
  );
};

export default Form;

const Form = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit} className='mb-4'>
      {props.children}
    </form>
  );
};

export default Form;

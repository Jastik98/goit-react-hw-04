import css from "./ErorMessage.module.css"

const ErrorMessage = ({ error }) => {
  return (
    <div>
      <p className={css.errorMessage}>
        Some error occured: {error}... Please, try again later
      </p>
    </div>
  );
};

export default ErrorMessage;

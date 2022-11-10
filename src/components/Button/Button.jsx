import "./Button.scss";
const Button = ({ className, btnContent, handleOnClickUpload }) => {
  return (
    <button onClick={handleOnClickUpload} className={className}>
      {btnContent}
    </button>
  );
};

export default Button;

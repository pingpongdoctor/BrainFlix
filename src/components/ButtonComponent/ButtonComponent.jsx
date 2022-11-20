import "./ButtonComponent.scss";

const ButtonComponent = ({
  btnClassName,
  btnContent,
  clickHandler,
  btnType,
}) => {
  return (
    <button type={btnType} onClick={clickHandler} className={btnClassName}>
      {btnContent}
    </button>
  );
};

export default ButtonComponent;

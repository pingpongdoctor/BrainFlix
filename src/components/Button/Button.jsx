import "./Button.scss";
const Button = (props) => {
  return <button className={props.className}>{props.btnContent}</button>;
};

export default Button;

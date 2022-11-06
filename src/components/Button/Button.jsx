import "./Button.scss";
const Button = ({ className, btnContent }) => {
  return <button className={className}>{btnContent}</button>;
};

export default Button;

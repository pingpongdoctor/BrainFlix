import "./Logo.scss";
const Logo = (props) => {
  return <img className={props.className} src={props.src} alt={props.alt} />;
};
export default Logo;

import "./Avatar.scss";

const Avatar = function (props) {
  return <img className={props.className} src={props.src} alt="avatar" />;
};

export default Avatar;

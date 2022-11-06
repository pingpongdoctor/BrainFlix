import "./Avatar.scss";

const Avatar = function ({ className, src }) {
  return <img className={className} src={src} alt="avatar" />;
};

export default Avatar;

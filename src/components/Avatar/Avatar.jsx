import "./Avatar.scss";

const Avatar = function ({ avatarClassName, avatarSrc, avatarAlt }) {
  return <img className={avatarClassName} src={avatarSrc} alt={avatarAlt} />;
};

export default Avatar;

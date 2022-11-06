import "./Avatar.scss";

const Avatar = function ({ className, src, alt }) {
  return <img className={className} src={src} alt={alt} />;
};

export default Avatar;

import "./Logo.scss";

const Logo = ({ className, src, alt, handleOnClickHome }) => {
  return (
    <img
      onClick={handleOnClickHome}
      className={className}
      src={src}
      alt={alt}
    />
  );
};

export default Logo;

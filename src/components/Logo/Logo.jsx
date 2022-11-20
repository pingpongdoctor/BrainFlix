import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = ({ logoClassName, logoSrc, logoAlt }) => {
  return (
    <Link to={"/"} className={logoClassName}>
      <img src={logoSrc} alt={logoAlt} />
    </Link>
  );
};

export default Logo;

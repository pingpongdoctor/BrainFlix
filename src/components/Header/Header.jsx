import "./Header.scss";
import Mohan from "../../assets/Images/Mohan-muruge.jpg";
import Logo from "../../assets/Images/Logo/BrainFlix-logo.svg";
import Button from "../Button/Button";
import LogoPic from "../Logo/Logo";
const Header = (props) => {
  return (
    <header className="header">
      <div className="header__container">
        <LogoPic className="logo" src={Logo} alt="logo" />
        <div className="header__wrap">
          <input
            className="header__input"
            placeholder="Search"
            type="text"
            name="input"
          ></input>
          <img className="avatar" src={Mohan} alt="avatar" />
        </div>
        <Button btnContent="Upload" className="btn" />
      </div>
    </header>
  );
};

export default Header;

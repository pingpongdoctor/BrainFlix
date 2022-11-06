import "./Header.scss";
import mohanPic from "../../assets/Images/Mohan-muruge.jpg";
import logoPic from "../../assets/Images/Logo/BrainFlix-logo.svg";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo className="logo" src={logoPic} alt="logo" />
        <div className="header__wrap">
          <input
            className="header__input"
            placeholder="Search"
            type="text"
            name="input"
          ></input>
          <Avatar
            className="avatar avatar--mobile"
            src={mohanPic}
            alt="avatar"
          />
        </div>
        <Button btnContent="upload" className="btn btn--header" />
        <Avatar className="avatar avatar--tablet" src={mohanPic} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;

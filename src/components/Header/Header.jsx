import "./Header.scss";
import mohan from "../../assets/Images/Mohan-muruge.jpg";
import logoPic from "../../assets/Images/Logo/BrainFlix-logo.svg";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";
const Header = (props) => {
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
          <Avatar className="avatar avatar--mobile" src={mohan} />
        </div>
        <Button btnContent="upload" className="btn btn-header" />
        <Avatar className="avatar avatar--tablet" src={mohan} />
      </div>
    </header>
  );
};

export default Header;

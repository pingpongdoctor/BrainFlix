import "./PageHeader.scss";
import mohanPic from "../../assets/Images/Mohan-muruge.jpg";
import logoPic from "../../assets/Images/Logo/BrainFlix-logo.svg";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Logo from "../Logo/Logo";
import Avatar from "../Avatar/Avatar";
import { useNavigate } from "react-router-dom";
const PageHeader = () => {
  const navigate = useNavigate();
  const handleOnClickUpload = function () {
    navigate("/upload");
  };
  return (
    <header className="header">
      <div className="header__container">
        <Logo logoClassName="logo" logoSrc={logoPic} logoAlt="logo" />
        <div className="header__wrap">
          <textarea
            className="input header__input"
            placeholder="Search"
            name="input"
            wrap="hard"
          ></textarea>
          <Avatar
            avatarClassName="avatar avatar--mobile"
            avatarSrc={mohanPic}
            avatarAlt="avatar"
          />
        </div>
        <ButtonComponent
          clickHandler={handleOnClickUpload}
          btnContent="upload"
          btnClassName="btn btn--header"
        />
        <Avatar
          avatarClassName="avatar avatar--tablet"
          avatarSrc={mohanPic}
          avatarAlt="avatar"
        />
      </div>
    </header>
  );
};

export default PageHeader;

import "./MainVideo.scss";
import { timeConv } from "../Utils/utils";

const MainVideo = function ({ activeVideo }) {
  return (
    <div className="main">
      <div className="main__container">
        <video
          className="main__video"
          poster={activeVideo.image}
          controls
        ></video>
        <h1 className="main__heading">{activeVideo.title}</h1>
        <div className="main__wrap">
          <p className="main__channel">By {activeVideo.channel}</p>
          <p className="main__views">{activeVideo.views}</p>
          <p className="main__time">{timeConv(activeVideo.timestamp)}</p>
          <p className="main__likes">{activeVideo.likes}</p>
        </div>
        <p className="main__text">{activeVideo.description}</p>
      </div>
    </div>
  );
};

export default MainVideo;

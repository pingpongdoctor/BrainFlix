import "./MainVideo.scss";
import { useParams } from "react-router-dom";
const MainVideo = function ({ poster }) {
  return (
    <div className="main-video">
      <div className="main-video__container">
        <video className="main-video__clip" poster={poster} controls></video>
      </div>
    </div>
  );
};
export default MainVideo;

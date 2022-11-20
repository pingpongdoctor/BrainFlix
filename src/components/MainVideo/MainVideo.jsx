import "./MainVideo.scss";
const URL = process.env.REACT_APP_API_URL || "";

const MainVideo = function ({ videoPoster }) {
  return (
    <div className="main-video">
      <div className="main-video__container">
        <video
          className="main-video__clip"
          poster={URL + videoPoster}
          controls
        ></video>
      </div>
    </div>
  );
};
export default MainVideo;

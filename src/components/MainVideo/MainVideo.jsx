import "./MainVideo.scss";

const MainVideo = function ({ videoPoster }) {
  return (
    <div className="main-video">
      <div className="main-video__container">
        <video
          className="main-video__clip"
          poster={videoPoster}
          controls
        ></video>
      </div>
    </div>
  );
};
export default MainVideo;

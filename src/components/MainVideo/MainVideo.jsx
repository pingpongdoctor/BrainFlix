import "./MainVideo.scss";
const MainVideo = function (props) {
  return (
    <div className="main-video">
      <div className="main-video__container">
        <video
          className="main-video__clip"
          poster={props.poster}
          controls
        ></video>
      </div>
    </div>
  );
};
export default MainVideo;

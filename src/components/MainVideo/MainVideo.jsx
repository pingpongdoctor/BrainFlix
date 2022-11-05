import "./MainVideo.scss";
const MainVideo = function (props) {
  return <video className="main-video" poster={props.poster} controls></video>;
};
export default MainVideo;

import "./VideoItem.scss";

const VideoItem = function ({ id, url, title, channel, videoHandler }) {
  return (
    <li
      className="next-video__item"
      onClick={(event) => {
        videoHandler(id);
      }}
    >
      <img className="next-video__img" src={url} alt="next video" />
      <div className="next-video__wrap">
        <p className="next-video__title">{title}</p>
        <p className="next-video__channel">{channel}</p>
      </div>
    </li>
  );
};

export default VideoItem;

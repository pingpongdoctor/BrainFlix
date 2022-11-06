import "./VideoItem.scss";

const VideoItem = function ({ id, url, title, channel, videoHandler }) {
  return (
    <li
      className="video-list__item"
      onClick={(event) => {
        videoHandler(id);
      }}
    >
      <img className="video-list__img" src={url} alt="next video" />
      <div className="video-list__wrap">
        <p className="video-list__title">{title}</p>
        <p className="video-list__channel">{channel}</p>
      </div>
    </li>
  );
};

export default VideoItem;

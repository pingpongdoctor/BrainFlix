import "./VideoItem.scss";

const VideoItem = function ({ id, url, title, channel, handlerVideo }) {
  return (
    <li
      className="video-list__item"
      onClick={() => {
        handlerVideo(id);
      }}
    >
      <img className="video-list__img" src={url} alt="next-video" />
      <div className="video-list__wrap">
        <p className="video-list__title">{title}</p>
        <p className="video-list__channel">{channel}</p>
      </div>
    </li>
  );
};

export default VideoItem;

import "./VideoItem.scss";
import { Link } from "react-router-dom";
const VideoItem = function ({ id, url, title, channel }) {
  return (
    <Link to={`/${id}`}>
      <li className="video-list__item">
        <img className="video-list__img" src={url} alt="next-video" />
        <div className="video-list__wrap">
          <p className="video-list__title">{title}</p>
          <p className="video-list__channel">{channel}</p>
        </div>
      </li>
    </Link>
  );
};

export default VideoItem;

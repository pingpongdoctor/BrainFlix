import "./VideoItem.scss";
import { Link } from "react-router-dom";
const URL = process.env.REACT_APP_API_URL || "";

const VideoItem = function ({ id, url, title, channel }) {
  //FUNCTION BRINGS US BACK TO THE TOP OF THE PAGE
  const onClickScrollToTop = function () {
    window.scrollTo(0, 0);
  };
  return (
    <Link onClick={onClickScrollToTop} to={`/videos/${id}`}>
      <li className="video-list__item">
        <img className="video-list__img" src={URL + url} alt="next-video" />
        <div className="video-list__wrap">
          <p className="video-list__title">{title}</p>
          <p className="video-list__channel">{channel}</p>
        </div>
      </li>
    </Link>
  );
};

export default VideoItem;

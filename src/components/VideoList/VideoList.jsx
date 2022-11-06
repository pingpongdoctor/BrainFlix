import "./VideoList.scss";
import VideoItem from "../VideoItems/VideoItem";

const VideoList = function ({ videoArr, id, handlerVideo }) {
  return (
    <section className="video-list">
      <div className="video-list__container">
        <h2 className="video-list__heading">Next Video</h2>
        <ul className="video-list__list">
          {videoArr
            .filter((video) => video.id !== id)
            .map((video) => (
              <VideoItem
                key={video.id}
                id={video.id}
                url={video.image}
                title={video.title}
                channel={video.channel}
                handlerVideo={handlerVideo}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default VideoList;

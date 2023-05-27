import "./VideoList.scss";
import VideoItem from "../VideoItems/VideoItem";

const VideoList = function ({ videoList, currentVideo }) {
  console.log(videoList);

  return (
    <div className="video-list">
      <div className="video-list__container">
        <p className="video-list__heading">Next Video</p>
        <ul className="video-list__list">
          {videoList
            .filter((video) => video.id !== currentVideo.id)
            .map((video) => (
              <VideoItem
                key={video.id}
                id={video.id}
                url={video.image}
                title={video.title}
                channel={video.channel}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoList;

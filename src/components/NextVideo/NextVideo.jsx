import "./NextVideo.scss";
import VideoItem from "../VideoItems/VideoItem";

const NextVideo = function ({ videoArr, id, videoHandler }) {
  return (
    <section className="next-video">
      <div className="next-video__container">
        <h2 className="next-video__heading">Next Video</h2>
        <ul className="next-video__list">
          {videoArr
            .filter((video) => video.id !== id)
            .map((video) => (
              <VideoItem
                key={video.id}
                id={video.id}
                url={video.image}
                title={video.title}
                channel={video.channel}
                videoHandler={videoHandler}
              />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default NextVideo;

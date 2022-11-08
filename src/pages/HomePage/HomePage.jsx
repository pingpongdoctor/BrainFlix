import "./HomePage.scss";
import MainVideoInfor from "../../components/MainVideoInfor/MainVideoInfor";
import VideoList from "../../components/VideoList/VideoList";
import Conversation from "../../components/Conversation/Conversation";
import MainVideo from "../../components/MainVideo/MainVideo";
import Header from "../../components/Header/Header";

export default function HomePage({
  poster,
  activeVideo,
  commentArr,
  handlerSubmit,
  id,
  videoArr,
  handlerVideo,
}) {
  return (
    <div className="home-page">
      {/* HEADER */}
      <Header />
      {/* MAIN VIDEO */}
      <MainVideo poster={poster} />
      <div className="page-container">
        <div className="page-flex">
          {/* FLEX CONTAINER OF MAIN VIDEO INFORMATION, CONVERSATION AND VIDEO LIST IN DESKTOP BREAKPOINT */}

          <div className="page-box">
            {/* MAIN VIDEO INFORMATION */}
            <MainVideoInfor activeVideo={activeVideo} />
            {/* CONVERSATION */}
            <Conversation
              commentArr={commentArr}
              handlerSubmit={handlerSubmit}
            />
          </div>
          {/* VIDEO LIST */}
          <VideoList id={id} videoArr={videoArr} handlerVideo={handlerVideo} />
        </div>
      </div>
    </div>
  );
}

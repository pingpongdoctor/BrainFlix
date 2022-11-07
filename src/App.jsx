import "./App.scss";
import Header from "./components/Header/Header";
import videoArr from "./data/video-details.json";
import MainVideoInfor from "./components/MainVideoInfor/MainVideoInfor";
import VideoList from "./components/VideoList/VideoList";
import Conversation from "./components/Conversation/Conversation";
import MainVideo from "./components/MainVideo/MainVideo";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function App() {
  //USETATE HOLDS THE OBJECT OF MAIN VIDEO
  const [activeVideo, setActiveVideo] = useState(videoArr[0]);

  //FUNCTION TO UPDATE THE MAIN VIDEO
  const handlerVideo = function (id) {
    const newVideo = videoArr.find((video) => video.id === id);
    setActiveVideo(newVideo);
  };

  //FUNCTION TO SUBMIT COMMENTS
  const handlerSubmit = function (comment) {
    const newCommentObj = {
      id: uuid(),
      name: "Anonymous",
      comment: comment,
      timestamp: new Date(),
    };
    const newCommentArr = [newCommentObj, ...activeVideo.comments];
    const newObj = { ...activeVideo, comments: newCommentArr };
    setActiveVideo(newObj);
  };

  return (
    <div className="App">
      {/* HEADER */}
      <Header />
      {/* MAIN VIDEO */}
      <MainVideo poster={activeVideo.image} />
      <div className="App__container">
        <div className="App__flex">
          {/* FLEX CONTAINER OF MAIN VIDEO INFORMATION, CONVERSATION AND VIDEO LIST IN DESKTOP BREAKPOINT */}

          <div className="App__flex-box">
            {/* MAIN VIDEO INFORMATION */}
            <MainVideoInfor activeVideo={activeVideo} />
            {/* CONVERSATION */}
            <Conversation
              commentArr={activeVideo.comments}
              handlerSubmit={handlerSubmit}
            />
          </div>
          {/* VIDEO LIST */}
          <VideoList
            id={activeVideo.id}
            videoArr={videoArr}
            handlerVideo={handlerVideo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

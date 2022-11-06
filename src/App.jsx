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
  //USESTATE
  const [activeVideo, setActiveVideo] = useState(videoArr[0]);
  //FUNCTION TO UPDATE THE CLICKED VIDEO
  const videoHandler = function (id) {
    const newVideo = videoArr.find((video) => video.id === id);
    setActiveVideo(newVideo);
  };
  //FUNCTION TO SUBMIT
  const submitHandler = function (comment) {
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
      <Header />
      <MainVideo poster={activeVideo.image} />
      <div className="App__container">
        <div className="App__flex">
          <div className="App__flex-box">
            <MainVideoInfor activeVideo={activeVideo} />
            <Conversation
              commentArr={activeVideo.comments}
              submitHandler={submitHandler}
            />
          </div>
          <VideoList
            id={activeVideo.id}
            videoArr={videoArr}
            videoHandler={videoHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

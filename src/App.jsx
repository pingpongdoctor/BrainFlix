import "./App.scss";
import Header from "./components/Header/Header";
import videoArr from "./data/video-details.json";
import MainVideo from "./components/MainVideo/MainVideo";
import NextVideo from "./components/VideoList/NextVideo";
import Conversation from "./components/Conversation/Conversation";
// import { v4 as uuid } from "uuid";
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
      name: "Anonymous",
      comment: comment,
    };
    const newCommentArr = [newCommentObj, ...activeVideo.comments];
    const newObj = { ...activeVideo, comments: newCommentArr };
    setActiveVideo(newObj);
  };
  return (
    <div className="App">
      <Header />
      <MainVideo activeVideo={activeVideo} />
      <Conversation
        commentArr={activeVideo.comments}
        submitHandler={submitHandler}
      />
      <NextVideo
        id={activeVideo.id}
        videoArr={videoArr}
        videoHandler={videoHandler}
      />
    </div>
  );
}

export default App;

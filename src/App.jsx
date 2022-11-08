import "./App.scss";
import videoArr from "./data/video-details.json";
import HomePage from "./pages/HomePage/HomePage";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                poster={activeVideo.image}
                activeVideo={activeVideo}
                commentArr={activeVideo.comments}
                handlerSubmit={handlerSubmit}
                id={activeVideo.id}
                videoArr={videoArr}
                handlerVideo={handlerVideo}
              />
            }
          />
          <Route path="/Home" element={<Navigate to="/" />} />
          <Route path="*" element={<h1>PLEASE USE THE RIGHT URL</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

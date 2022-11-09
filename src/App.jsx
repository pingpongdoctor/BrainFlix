import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  // //FUNCTION TO SUBMIT COMMENTS
  // const handlerSubmit = function (comment) {
  //   const newCommentObj = {
  //     id: uuid(),
  //     name: "Anonymous",
  //     comment: comment,
  //     timestamp: new Date(),
  //   };
  //   const newCommentArr = [newCommentObj, ...activeVideo.comments];
  //   const newObj = { ...activeVideo, comments: newCommentArr };
  //   setActiveVideo(newObj);
  // };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<Navigate to="/" />} />
          <Route path="/:id" element={<HomePage />} />
          <Route path="/Upload" element={<UploadPage />} />
          <Route path="*" element={<h1>PLEASE USE THE RIGHT URL</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

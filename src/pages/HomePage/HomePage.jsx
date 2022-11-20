import "./HomePage.scss";
import MainVideoInfor from "../../components/MainVideoInfor/MainVideoInfor";
import VideoList from "../../components/VideoList/VideoList";
import Conversation from "../../components/Conversation/Conversation";
import MainVideo from "../../components/MainVideo/MainVideo";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const URL = process.env.REACT_APP_API_URL || "";
export default function HomePage() {
  //STATE FOR THE CURRENT VIDEO
  const [currentVideo, setCurrentVideo] = useState(null);

  //STATE FOR THE VIDEO LIST
  const [videoList, setVideoList] = useState([]);

  //GET DATA ARRAY AN STORE IT IN THE VIDEOLIST STATE
  useEffect(() => {
    axios
      .get(`${URL}/videos`)
      .then((response) => {
        const videoListArr = response.data;
        setVideoList(videoListArr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //USE USEPARAMS TO GET THE VIDEO ID
  const { id } = useParams();

  //USE ID TO GET DATA OF THE VIDEO OBJECT AND STORE IT IN THE CURRENTVIDEO STATE
  useEffect(() => {
    let getId =
      (videoList &&
        videoList.filter((obj) => obj.id === id).length > 0 &&
        id) ||
      (videoList[0] && videoList[0].id);

    if (getId) {
      axios
        .get(`${URL}/videos/${getId}`)
        .then((response) => {
          setCurrentVideo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id, videoList]);

  //FUNCTION USED TO GET THE CURRENT VIDEO OBJECT AND UPDATE THE OBJECT TO THE CURRENTVIDEO STATE
  const getAndUpdateCurrentVideo = function () {
    axios
      .get(`${URL}/videos/${currentVideo.id}`)
      .then((response) => {
        setCurrentVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //SUBMIT FUNCTION
  const handleOnSubmitComment = function (event, comment) {
    event.preventDefault();
    if (comment && [...comment].length > 10) {
      const commentPost = {
        name: "Simon",
        comment: comment,
      };
      axios
        .post(`${URL}/videos/${currentVideo.id}/comments`, commentPost)
        .then((response) => {
          getAndUpdateCurrentVideo();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Comment at least 10 letters");
    }
  };

  //DELETE FUNCTION
  const handleOnClickDelete = function (commentId) {
    axios
      .delete(`${URL}/videos/${currentVideo.id}/comments/${commentId}`)
      .then((response) => {
        getAndUpdateCurrentVideo();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //LIKE FUNCTION
  const handleOnClickLike = function () {
    axios.put(`${URL}/videos/${currentVideo.id}/likes`).then((response) => {
      getAndUpdateCurrentVideo();
    });
  };
  return (
    <div className="home-page">
      {/* MAIN VIDEO */}
      {currentVideo && <MainVideo videoPoster={currentVideo.image} />}
      <div className="home-page__container">
        <div className="home-page__flex">
          {/* FLEX CONTAINER OF MAIN VIDEO INFORMATION, CONVERSATION AND VIDEO LIST IN DESKTOP BREAKPOINT */}

          <div className="home-page__box">
            {/* MAIN VIDEO INFORMATION */}
            {currentVideo && (
              <MainVideoInfor
                handleOnClickLike={handleOnClickLike}
                currentVideo={currentVideo}
              />
            )}
            {/* CONVERSATION */}
            {currentVideo && (
              <Conversation
                handleOnSubmitComment={handleOnSubmitComment}
                commentArr={currentVideo.comments.sort(
                  (a, b) => b.timestamp - a.timestamp
                )}
                handleOnClickDelete={handleOnClickDelete}
              />
            )}
          </div>
          {/* VIDEO LIST */}
          {videoList && currentVideo && (
            <VideoList videoList={videoList} currentVideo={currentVideo} />
          )}
        </div>
      </div>
    </div>
  );
}

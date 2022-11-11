import "./HomePage.scss";
import MainVideoInfor from "../../components/MainVideoInfor/MainVideoInfor";
import VideoList from "../../components/VideoList/VideoList";
import Conversation from "../../components/Conversation/Conversation";
import MainVideo from "../../components/MainVideo/MainVideo";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage() {
  //STATE FOR THE CURRENT VIDEO
  const [currentVideo, setCurrentVideo] = useState(null);
  //STATE FOR THE VIDEO LIST
  const [videoList, setVideoList] = useState([]);
  //VARIABLE STRORES THE LINK TO VIDEO ENDPOINT
  const webLink = "https://project-2-api.herokuapp.com/videos";
  //VARIABLE STRORES THE API KEY
  const apiKey = "?api_key=317d0969-049f-457c-b0f4-aa24cb948a29";
  //GET DATA ARRAY AN STORE IT IN THE VIDEOLIST STATE
  useEffect(() => {
    axios
      .get(`${webLink}${apiKey}`)
      .then((response) => {
        const videoListArr = response.data;
        setVideoList(videoListArr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //USE USEPARAMS TO GET ID
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
        .get(`${webLink}/${getId}${apiKey}`)
        .then((response) => {
          setCurrentVideo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id, videoList]);
  //FUNCTION USED TO GET THE CURRENT VIDEO OBJECT AND UPDATE THE OBJECT TO THE CURRENTVIDEO STATE
  const getAndUpdateCurrentVideo = function (response) {
    axios
      .get(`${webLink}/${currentVideo.id}${apiKey}`)
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
        .post(`${webLink}/${currentVideo.id}/comments${apiKey}`, commentPost)
        .then((response) => {
          getAndUpdateCurrentVideo(response);
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
      .delete(`${webLink}/${currentVideo.id}/comments/${commentId}${apiKey}`)
      .then((response) => {
        getAndUpdateCurrentVideo(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="home-page">
      {/* HEADER */}
      <PageHeader />
      {/* MAIN VIDEO */}
      {currentVideo && <MainVideo videoPoster={currentVideo.image} />}
      <div className="home-page__container">
        <div className="home-page__flex">
          {/* FLEX CONTAINER OF MAIN VIDEO INFORMATION, CONVERSATION AND VIDEO LIST IN DESKTOP BREAKPOINT */}

          <div className="home-page__box">
            {/* MAIN VIDEO INFORMATION */}
            {currentVideo && <MainVideoInfor currentVideo={currentVideo} />}
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

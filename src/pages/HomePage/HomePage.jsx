import "./HomePage.scss";
import MainVideoInfor from "../../components/MainVideoInfor/MainVideoInfor";
import VideoList from "../../components/VideoList/VideoList";
import Conversation from "../../components/Conversation/Conversation";
import MainVideo from "../../components/MainVideo/MainVideo";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage() {
  //STATE FOR THE CURRENT VIDEO
  const [currentVideo, setCurrentVideo] = useState(null);
  //State for the videoList
  const [videoList, setVideoList] = useState([]);
  //GET DATA ARRAY AN STORE IT IN THE VIDEOLIST STATE
  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=317d0969-049f-457c-b0f4-aa24cb948a29"
      )
      .then((response) => {
        console.log(response.data);
        setVideoList(response.data);
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
        .get(
          `https://project-2-api.herokuapp.com/videos/${getId}?api_key=317d0969-049f-457c-b0f4-aa24cb948a29`
        )
        .then((response) => {
          console.log(response);
          setCurrentVideo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id, videoList]);

  return (
    <div className="home-page">
      {/* HEADER */}
      <Header />
      {/* MAIN VIDEO */}
      {currentVideo && <MainVideo poster={currentVideo.image} />}
      <div className="page-container">
        <div className="page-flex">
          {/* FLEX CONTAINER OF MAIN VIDEO INFORMATION, CONVERSATION AND VIDEO LIST IN DESKTOP BREAKPOINT */}

          <div className="page-box">
            {/* MAIN VIDEO INFORMATION */}
            {currentVideo && <MainVideoInfor currentVideo={currentVideo} />}
            {/* CONVERSATION */}
            {currentVideo && (
              <Conversation commentArr={currentVideo.comments} />
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

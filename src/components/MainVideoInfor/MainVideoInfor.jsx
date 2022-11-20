import "./MainVideoInfor.scss";
import { timeConvDetail } from "../../Utils/utils";

const MainVideoInfor = function ({ currentVideo, handleOnClickLike }) {
  return (
    <section className="main-infor">
      <div className="main-infor__container">
        <h1 className="main-infor__heading">{currentVideo.title}</h1>
        <div className="main-infor__wrap">
          <p className="main-infor__channel">By {currentVideo.channel}</p>
          <p className="main-infor__views">{currentVideo.views}</p>
          <p className="main-infor__time">
            {timeConvDetail(currentVideo.timestamp)}
          </p>
          {/* LIKE BUTTON FOR THE MAIN VIDEO  */}
          <button onClick={handleOnClickLike} className="main-infor__likes">
            {currentVideo.likes}
          </button>
        </div>
        <p className="main-infor__text">{currentVideo.description}</p>
      </div>
    </section>
  );
};

export default MainVideoInfor;

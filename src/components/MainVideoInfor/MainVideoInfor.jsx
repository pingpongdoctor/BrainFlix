import "./MainVideoInfor.scss";
import { timeConvDetail } from "../Utils/utils";

const MainVideoInfor = function ({ activeVideo }) {
  return (
    <section className="main-infor">
      <div className="main-infor__container">
        <h1 className="main-infor__heading">{activeVideo.title}</h1>
        <div className="main-infor__wrap">
          <p className="main-infor__channel">By {activeVideo.channel}</p>
          <p className="main-infor__views">{activeVideo.views}</p>
          <p className="main-infor__time">
            {timeConvDetail(activeVideo.timestamp)}
          </p>
          <p className="main-infor__likes">{activeVideo.likes}</p>
        </div>
        <p className="main-infor__text">{activeVideo.description}</p>
      </div>
    </section>
  );
};

export default MainVideoInfor;

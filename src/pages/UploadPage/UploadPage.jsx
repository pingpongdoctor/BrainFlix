import "./UploadPage.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
export default function UploadPage() {
  return (
    <div className="upload">
      <Header />
      <form className="upload__form">
        <div className="upload__container">
          <h1 className="upload__heading">Upload Video</h1>
          <div className="upload__big-wrap">
            <div className="upload__thumbnail-infor">
              <p className="upload__text">video thumbnail</p>
              <img
                className="upload__thumbnail"
                src={thumbnail}
                alt="video-thumbnail"
              />
            </div>

            <div className="upload__wrapper">
              <label className="upload__label upload__text" htmlFor="vid-title">
                title for video
              </label>
              <textarea
                className="upload__title-input"
                name="title"
                id="vid-title"
                wrap="hard"
                placeholder="Add a title to your video"
              ></textarea>
              <label
                className="upload__label upload__text"
                htmlFor="vid-descript"
              >
                add a video description
              </label>
              <textarea
                className="upload__descript-input"
                name="description"
                id="vid-descript"
                wrap="hard"
                placeholder="Add a title to your video"
              ></textarea>
            </div>
          </div>
          <div className="upload__ending">
            <Button className="btn btn--upload" btnContent="publish" />
            <p className="upload__cancel">cancel</p>
          </div>
        </div>
      </form>
    </div>
  );
}

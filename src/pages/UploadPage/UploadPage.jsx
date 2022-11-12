import "./UploadPage.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  //STATE TO TRACK VALUES OF INPUT BOXES
  const [title, setTitle] = useState("");
  const [descript, setDescript] = useState("");

  //FUNCTION TO UPDATE STATES OF INPUT BOXES
  const handleChangeTitle = function (event) {
    setTitle(event.target.value);
  };
  const handleChangeDescript = function (event) {
    setDescript(event.target.value);
  };
  //FUNCTION TESTING IF INPUT VALUES ARE VALID OR NOT
  const isTitleValid = function () {
    if (title && [...title].length > 10) {
      return true;
    }
    return false;
  };
  const isDescriptValid = function () {
    if (descript && [...descript].length > 10) {
      return true;
    }
    return false;
  };
  const isFormValid = function () {
    if (!isTitleValid()) {
      return false;
    } else if (!isDescriptValid()) {
      return false;
    }
    return true;
  };

  //FUNCTION TO REDIRECT TO HOMEPAGE
  const navigate = useNavigate();
  const handleOnClickHome = function () {
    navigate("/");
  };

  //FUNCTION TO PUBLISH
  const handleOnClickPublish = function (event) {
    event.preventDefault();
    if (!isFormValid()) {
      alert("Make sure to insert at least 10 letters for each input box!");
    } else {
      alert("Thank you for uploading");
      navigate("/");
    }
  };

  return (
    <div className="upload">
      <PageHeader />
      {/* UPLOAD PAGE FORM  */}
      <form onSubmit={handleOnClickPublish} className="upload__form">
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
              {/* TITLE INPUT BOX */}
              <label className="upload__text" htmlFor="vid-title">
                title for video
              </label>
              <textarea
                className={
                  isTitleValid()
                    ? "input upload__title-input"
                    : "input upload__title-input upload__title-input--error"
                }
                name="title"
                id="vid-title"
                wrap="hard"
                placeholder="Add a title to your video"
                value={title}
                onChange={handleChangeTitle}
              ></textarea>
              {/* DESCRIPTION INPUT BOX */}
              <label className="upload__text" htmlFor="vid-descript">
                add a video description
              </label>
              <textarea
                className={
                  isDescriptValid()
                    ? "input upload__descript-input"
                    : "input upload__descript-input upload__descript-input--error"
                }
                name="description"
                id="vid-descript"
                wrap="hard"
                placeholder="Add a title to your video"
                value={descript}
                onChange={handleChangeDescript}
              ></textarea>
            </div>
          </div>
          <div className="upload__ending">
            {/* PUBLISH BUTTON */}
            <ButtonComponent
              btnClassName="btn btn--upload"
              btnContent="publish"
            />
            {/* CANCEL BUTTON */}
            <button onClick={handleOnClickHome} className="upload__cancel">
              cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

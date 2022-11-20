import "./UploadPage.scss";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const URL = process.env.REACT_APP_API_URL || "";

export default function UploadPage() {
  //STATE TO STORE THE INPUT VALUES OF INPUT BOXES
  const [title, setTitle] = useState("");
  const [descript, setDescript] = useState("");
  const [file, setFile] = useState(null);

  //SET STATE TO SHOW PREVIEWED IMAGE AFTER CHOOSING AN UPLOADED FILE
  const [previewFile, setPreviewFile] = useState(null);

  //FUNCTION TO UPDATE STATES OF INPUT BOXES
  const handleChangeTitle = function (event) {
    setTitle(event.target.value);
  };

  const handleChangeDescript = function (event) {
    setDescript(event.target.value);
  };

  const handleChangeFile = function (event) {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      const newUrl = window.URL.createObjectURL(event.target.files[0]);
      setPreviewFile(newUrl);
    }
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

  const isFileValid = function () {
    if (file) {
      return true;
    }
    return false;
  };

  const isFormValid = function () {
    if (!isTitleValid()) {
      return false;
    } else if (!isDescriptValid()) {
      return false;
    } else if (!isFileValid()) {
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
      alert(
        "Make sure to insert the uploaded file and at least 10 letters for each input box!"
      );
    } else {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("description", descript);
      formData.append("title", title);
      axios
        .post(`${URL}/videos`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          alert("Thank you for uploading");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="upload">
      {/* UPLOAD PAGE FORM  */}
      <form onSubmit={handleOnClickPublish} className="upload__form">
        <div className="upload__container">
          <h1 className="upload__heading">Upload Video</h1>
          <div className="upload__big-wrap">
            <div className="upload__thumbnail-infor">
              <label htmlFor="file" className="upload__text">
                video thumbnail
              </label>
              <img
                className={
                  previewFile
                    ? "upload__thumbnail"
                    : "upload__thumbnail--display-none"
                }
                src={previewFile}
                alt="video-thumbnail"
              />
              <input
                className="upload__file-input"
                type="file"
                id="file"
                name="file"
                onChange={handleChangeFile}
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
              btnType="submit"
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

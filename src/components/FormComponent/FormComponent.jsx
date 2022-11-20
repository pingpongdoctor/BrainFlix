import "./FormComponent.scss";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useState } from "react";
const FormComponent = function ({ handleOnSubmitComment }) {
  //STATE FOR THE COMMENT
  const [comment, setComment] = useState("");
  //FUNCTION TO OBSERVE THE COMMENT INPUT
  const handleChangeComment = function (event) {
    setComment(event.target.value);
  };
  //FUNCTION TO CHECK FOR THE VALIDATION OF COMMENT
  const IsCommentValid = function () {
    if (comment && [...comment].length > 10) {
      return true;
    }
    return false;
  };
  return (
    <form
      onSubmit={(event) => {
        handleOnSubmitComment(event, comment);
      }}
      className="conversation__form"
    >
      <div className="conversation__label-input">
        <label htmlFor="input" className="conversation__label">
          join the conversation
        </label>
        <textarea
          placeholder="Add a new comment"
          className={
            IsCommentValid()
              ? "input conversation__input"
              : "input conversation__input conversation__input--error"
          }
          name="input"
          wrap="hard"
          id="input"
          value={comment}
          onChange={handleChangeComment}
        ></textarea>
      </div>
      <ButtonComponent
        btnType="submit"
        btnContent="comment"
        btnClassName="btn btn--form"
      />
    </form>
  );
};

export default FormComponent;

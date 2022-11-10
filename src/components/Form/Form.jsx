import "./Form.scss";
import Button from "../Button/Button";
import { useState } from "react";
import axios from "axios";
const Form = function ({ handleSubmit }) {
  const [comment, setComment] = useState("");
  const handleChangeComment = function (event) {
    setComment(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, comment);
      }}
      className="conversation__form"
    >
      <div className="conversation__label-input">
        <label htmlFor="input" className="conversation__label">
          join the conversation
        </label>
        <textarea
          placeholder="Add a new comment"
          className="conversation__input"
          name="input"
          wrap="hard"
          id="input"
          value={comment}
          onChange={handleChangeComment}
        ></textarea>
      </div>
      <Button btnContent="comment" className="btn btn--form" />
    </form>
  );
};

export default Form;

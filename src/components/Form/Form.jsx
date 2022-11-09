import "./Form.scss";
import Button from "../Button/Button";
const Form = function (props) {
  return (
    <form className="conversation__form">
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
        ></textarea>
      </div>
      <Button btnContent="comment" className="btn btn--comment" />
    </form>
  );
};

export default Form;

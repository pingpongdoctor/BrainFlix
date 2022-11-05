import "./Form.scss";
import Button from "../Button/Button";
const Form = function (props) {
  //Function for submitting
  const submitFunc = function (event) {
    const inputValue = event.target.input.value;
    event.preventDefault();
    if (event.target.input.value !== "") {
      props.submitHandler(inputValue);
      event.target.input.classList.remove("conversation__input--error");
    } else {
      alert("missing information");
      event.target.input.classList.add("conversation__input--error");
    }
  };
  //Function to focus and blur the input box
  const focusFunc = function (event) {
    event.target.classList.add("conversation__input--focus");
  };
  const blurFunc = function (event) {
    event.target.classList.remove("conversation__input--focus");
  };
  return (
    <form onSubmit={submitFunc} className="conversation__form">
      <div className="conversation__label-input">
        <label htmlFor="input" className="conversation__label">
          join the conversation
        </label>
        <textarea
          onFocus={focusFunc}
          onBlur={blurFunc}
          placeholder="Add a new comment"
          className="conversation__input"
          name="input"
          wrap="hard"
          id="input"
        ></textarea>
      </div>
      <Button btnContent="comment" className="btn btn-comment" />
    </form>
  );
};

export default Form;

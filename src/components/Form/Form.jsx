import "./Form.scss";
import Button from "../Button/Button";
const Form = function (props) {
  //Function for submitting
  const submitFunc = function (event) {
    const inputValue = event.target.input.value;
    event.preventDefault();
    if (event.target.input.value !== "") {
      props.handlerSubmit(inputValue);
      event.target.input.classList.remove("conversation__input--error");
    } else {
      alert("missing information");
      event.target.input.classList.add("conversation__input--error");
      console.log(event.target.input);
    }
  };
  return (
    <form onSubmit={submitFunc} className="conversation__form">
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

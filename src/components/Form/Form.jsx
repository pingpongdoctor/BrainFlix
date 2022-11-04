import "./Form.scss";
import Button from "../Button/Button";
const Form = function (props) {
  const submitFunc = function (event) {
    const inputValue = event.target.input.value;
    event.preventDefault();
    props.submitHandler(inputValue);
  };
  return (
    <form onSubmit={submitFunc} className="conversation__form">
      <h2 className="conversation__heading">join the conversation</h2>
      <textarea
        placeholder="Add a new comment"
        className="conversation__input"
        name="input"
        rows={5}
        wrap="hard"
      ></textarea>
      <Button btnContent="comment" className="btn" />
    </form>
  );
};

export default Form;

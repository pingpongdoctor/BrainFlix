import Form from "../Form/Form";
import Avatar from "../Avatar/Avatar";
import mohan from "../../assets/Images/Mohan-muruge.jpg";
import "./Conversation.scss";
import CommentList from "../CommentList/CommentList";
const Conversation = function (props) {
  return (
    <section className="conversation">
      <div className=" conversation__container">
        <p className="conversation__comment-num">
          {props.commentArr.length} Comments
        </p>
        <div className="conversation__wrap">
          <Avatar className="avatar avatar-form" src={mohan} />
          <Form submitHandler={props.submitHandler} />
        </div>
        <CommentList commentArr={props.commentArr} />
      </div>
    </section>
  );
};

export default Conversation;

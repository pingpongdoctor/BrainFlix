import Form from "../Form/Form";
import Avatar from "../Avatar/Avatar";
import mohanPic from "../../assets/Images/Mohan-muruge.jpg";
import "./Conversation.scss";
import CommentList from "../CommentList/CommentList";
const Conversation = function ({ commentArr, handlerSubmit }) {
  return (
    <section className="conversation">
      <div className=" conversation__container">
        <p className="conversation__comment-num">
          {commentArr.length} Comments
        </p>
        <div className="conversation__wrap">
          <Avatar className="avatar avatar--form" src={mohanPic} alt="avatar" />
          <Form handlerSubmit={handlerSubmit} />
        </div>
        <CommentList commentArr={commentArr} />
      </div>
    </section>
  );
};

export default Conversation;

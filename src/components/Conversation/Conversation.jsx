import Form from "../Form/Form";
import Avatar from "../Avatar/Avatar";
import mohanPic from "../../assets/Images/Mohan-muruge.jpg";
import "./Conversation.scss";
import CommentList from "../CommentList/CommentList";
const Conversation = function ({
  commentArr,
  handleSubmit,
  handleOnClickDelete,
  handleOnClickLike,
}) {
  return (
    <div className="conversation">
      <div className=" conversation__container">
        <p className="conversation__comment-num">
          {commentArr.length} Comments
        </p>
        <div className="conversation__wrap">
          <Avatar className="avatar avatar--form" src={mohanPic} alt="avatar" />
          <Form handleSubmit={handleSubmit} />
        </div>
        <CommentList
          handleOnClickDelete={handleOnClickDelete}
          handleOnClickLike={handleOnClickLike}
          commentArr={commentArr}
        />
      </div>
    </div>
  );
};

export default Conversation;

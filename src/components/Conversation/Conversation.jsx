import FormComponent from "../FormComponent/FormComponent";
import Avatar from "../Avatar/Avatar";
import mohanPic from "../../assets/Images/Mohan-muruge.jpg";
import "./Conversation.scss";
import CommentList from "../CommentList/CommentList";
const Conversation = function ({
  commentArr,
  handleOnSubmitComment,
  handleOnClickDelete,
}) {
  return (
    <div className="conversation">
      <div className=" conversation__container">
        {/* COMMENT QUANTITY */}
        <p className="conversation__comment-num">
          {commentArr.length} Comments
        </p>
        <div className="conversation__wrap">
          {/* AVARTAR */}
          <Avatar
            avatarClassName="avatar avatar--form"
            avatarSrc={mohanPic}
            avatarAlt="avatar"
          />
          {/* COMMENT SUBMITTING FORM */}
          <FormComponent handleOnSubmitComment={handleOnSubmitComment} />
        </div>
        {/* COMMENT LIST */}
        <CommentList
          handleOnClickDelete={handleOnClickDelete}
          commentArr={commentArr}
        />
      </div>
    </div>
  );
};

export default Conversation;

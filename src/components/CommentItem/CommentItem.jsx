import "./CommentItem.scss";
import Avatar from "../Avatar/Avatar";
import mohanPic from "../../assets/Images/Mohan-muruge.jpg";
import { timeConvDetail } from "../../Utils/utils";

const CommentItem = function ({
  name,
  time,
  comment,
  handleOnClickDelete,
  id,
}) {
  return (
    <li className="conversation__comment-item">
      {/* COMMENT AVATAR */}
      <Avatar
        avatarClassName="avatar"
        avatarSrc={mohanPic}
        avatarAlt="avatar"
      />
      {/* COMMENT INFORMATION */}
      <div className="conversation__comment-infor">
        <div className="conversation__comment-wrap">
          <p className="conversation__comment-name">{name}</p>
          <p className="conversation__comment-time">{timeConvDetail(time)}</p>
        </div>
        <p className="conversation__comment-text">{comment}</p>
        {/* DELETE COMMENT BUTTON */}
        <button
          onClick={() => {
            handleOnClickDelete(id);
          }}
          className="conversation__comment-btn"
        >
          Delete
        </button>
      </div>
    </li>
  );
};
export default CommentItem;

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
  likes,
}) {
  return (
    <li className="conversation__comment-item">
      <Avatar
        avatarClassName="avatar"
        avatarSrc={mohanPic}
        avatarAlt="avatar"
      />
      <div className="conversation__comment-infor">
        <div className="conversation__comment-wrap">
          <p className="conversation__comment-name">{name}</p>
          <p className="conversation__comment-time">{timeConvDetail(time)}</p>
        </div>
        <p className="conversation__comment-text">{comment}</p>
        <div className="conversation__comment-btns">
          <button className="conversation__comment-btn">Like:{likes}</button>
          <button
            onClick={() => {
              handleOnClickDelete(id);
            }}
            className="conversation__comment-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};
export default CommentItem;

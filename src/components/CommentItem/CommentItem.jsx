import "./CommentItem.scss";
import Avatar from "../Avatar/Avatar";
import mohan from "../../assets/Images/Mohan-muruge.jpg";
import { timeConvDetail } from "../Utils/utils";
const CommentItem = function ({ name, time, comment }) {
  return (
    <li className="conversation__comment-item">
      <Avatar className="avatar" src={mohan} />
      <div className="conversation__comment-infor">
        <div className="conversation__comment-wrap">
          <p className="conversation__comment-name">{name}</p>
          <p className="conversation__comment-time">{timeConvDetail(time)}</p>
        </div>
        <p className="conversation__comment-text">{comment}</p>
      </div>
    </li>
  );
};
export default CommentItem;

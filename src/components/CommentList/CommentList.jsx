import "./CommentList.scss";
import CommentItem from "../CommentItem/CommentItem";
const CommentList = function (props) {
  return (
    <ul className="conversation__comment-list">
      {props.commentArr.map((comment) => (
        <CommentItem
          id={comment.id}
          key={comment.id}
          name={comment.name}
          comment={comment.comment}
          time={comment.timestamp}
        />
      ))}
    </ul>
  );
};

export default CommentList;

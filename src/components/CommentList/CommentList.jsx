import "./CommentList.scss";
import CommentItem from "../CommentItem/CommentItem";
const CommentList = function (props) {
  return (
    <ul className="conversation__comment-list">
      {props.commentArr.map((comment) => (
        <CommentItem
          id={comment.id}
          key={comment.id}
          likes={comment.likes}
          name={comment.name}
          comment={comment.comment}
          time={comment.timestamp}
          handleOnClickDelete={props.handleOnClickDelete}
          handleOnClickLike={props.handleOnClickLike}
        />
      ))}
    </ul>
  );
};

export default CommentList;

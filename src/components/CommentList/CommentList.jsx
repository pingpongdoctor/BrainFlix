import "./CommentList.scss";
import CommentItem from "../CommentItem/CommentItem";
const CommentList = function ({ handleOnClickDelete, commentArr }) {
  return (
    <ul className="conversation__comment-list">
      {commentArr.map((comment) => (
        <CommentItem
          id={comment.id}
          key={comment.id}
          likes={comment.likes}
          name={comment.name}
          comment={comment.comment}
          time={comment.timestamp}
          handleOnClickDelete={handleOnClickDelete}
        />
      ))}
    </ul>
  );
};

export default CommentList;

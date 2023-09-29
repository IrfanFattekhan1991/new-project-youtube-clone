import Comment from "./Comment";

const CommentsList = ({ comments }: any) => {
  console.log(comments.replies);
  return comments.map((comment: any, index: number) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;

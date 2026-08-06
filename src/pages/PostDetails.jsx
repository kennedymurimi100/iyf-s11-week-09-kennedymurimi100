import { useParams } from "react-router-dom";

function PostDetails() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Post Details</h1>
      <p>Post ID: {postId}</p>
    </div>
  );
}

export default PostDetails;
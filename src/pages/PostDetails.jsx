import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function PostDetails() {
  const { postId } = useParams();

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default PostDetails;
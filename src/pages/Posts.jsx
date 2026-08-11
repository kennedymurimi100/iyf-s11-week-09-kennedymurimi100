import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";


function Posts() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>

      {data.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          <Link to={`/posts/${post.id}`}>Read More</Link>
        </article>
      ))}
    </div>
  );
}

export default Posts;
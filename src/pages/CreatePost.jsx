import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      title,
      body,
    });

    alert("Post created!");

    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h1>Create a Post</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="body">Post Content</label>
          <br />
          <textarea
            id="body"
            rows="5"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your post..."
            required
          />
        </div>

        <br />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
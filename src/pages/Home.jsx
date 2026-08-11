import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to CommunityHub</h1>

      <p>
        Connect with the community, explore posts, and learn more about
        CommunityHub.
      </p>

      <div>
        <Link to="/posts">View Posts</Link>
        {" | "}
        <Link to="/about">About CommunityHub</Link>
      </div>
    </div>
  );
}

export default Home;
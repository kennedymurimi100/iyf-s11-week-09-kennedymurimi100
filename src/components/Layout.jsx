import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <nav
          style={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            backgroundColor: "#f4f4f4",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f4f4f4",
        }}
      >
        <p>&copy; 2026 CommunityHub</p>
      </footer>
    </div>
  );
}

export default Layout;
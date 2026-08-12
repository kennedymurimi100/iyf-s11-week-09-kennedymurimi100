import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetails from './pages/PostDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';
import CreatePost from './pages/CreatePost';

function App() {
    const [newPosts, setNewPosts] = useState([]);

    const handleCreatePost = (post) => {
        setNewPosts((prevPosts) => [post, ...prevPosts]);
    };

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route
                    path="posts"
                    element={<Posts newPosts={newPosts} />}
                />

                <Route
                    path="posts/:postId"
                    element={<PostDetails newPosts={newPosts} />}
                />

                <Route
                    path="create-post"
                    element={<CreatePost onCreatePost={handleCreatePost} />}
                />

                <Route path="about" element={<About />} />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
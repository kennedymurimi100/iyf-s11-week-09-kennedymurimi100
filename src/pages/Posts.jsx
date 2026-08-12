import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Posts({ newPosts = [] }) {
    const [search, setSearch] = useState('');

    const {
        data: posts,
        loading,
        error
    } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (loading) {
        return <p>Loading posts...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const allPosts = [...newPosts, ...(posts || [])];

    const filteredPosts = allPosts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Community Posts</h1>

            <input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredPosts.map((post) => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>

                    <Link to={`/posts/${post.id}`}>
                        Read More
                    </Link>
                </article>
            ))}
        </div>
    );
}

export default Posts;
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function PostDetails({ newPosts = [] }) {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const localPost = newPosts.find(
            (item) => String(item.id) === postId
        );

        if (localPost) {
            setPost(localPost);
            setLoading(false);
            return;
        }

        const fetchPost = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${postId}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }

                const data = await response.json();
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [postId, newPosts]);

    if (loading) {
        return <p>Loading post...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!post) {
        return <p>Post not found.</p>;
    }

    return (
        <article>
            <Link to="/posts">&larr; Back to Posts</Link>

            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    );
}

export default PostDetails;
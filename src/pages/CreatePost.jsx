import { useState } from 'react';
import { Input } from '../components/shared';

function CreatePost({ onCreatePost }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title,
            body,
        };

        onCreatePost(newPost);

        setTitle('');
        setBody('');
    };

    return (
        <div>
            <h1>Create Post</h1>

            <form onSubmit={handleSubmit}>
                <Input
                    label="Title"
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter post title"
                    required
                />

                <div>
                    <label htmlFor="body">Body</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Write your post"
                    />
                </div>

                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
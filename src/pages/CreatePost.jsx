import { useState } from 'react';
import { Input, Button, Modal } from '../components/shared';

function CreatePost({ onCreatePost }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            title,
            body,
        };

        onCreatePost(newPost);
        setShowModal(true);

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

               <Button type="submit">
  Create Post
</Button>
            </form>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Post Created!">
                <p>Your post has been added successfully.</p>
                <Button onClick={() => setShowModal(false)}>
                    Close
                </Button>
            </Modal>
        </div>
    );
}

export default CreatePost;
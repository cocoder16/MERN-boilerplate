import React, { Fragment } from 'react';
import { createPost, getPost, updatePost, deletePost } from '~c/services/posts';

const Post = () => {
    return (
        <Fragment>
            <h1>Post</h1>
            <button type='button' onClick={createPost}>create</button>
            <button type='button' onClick={getPost}>read</button>
            <button type='button' onClick={updatePost}>update</button>
            <button type='button' onClick={deletePost}>delete</button>
        </Fragment>
    )
};

export default Post;
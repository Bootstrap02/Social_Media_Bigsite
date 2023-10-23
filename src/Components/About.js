import React from 'react';
import { useSelector } from 'react-redux';
import Rainbow from '../HOC/Rainbow';

const About = () => {
    const comments = useSelector(state => state.comments.comments);

    // Map through the comments array and render each comment object
    const commentList = comments.map(comment => (
        <div key={comment.id}>
            <h3>{comment.title}</h3>
            <p>{comment.body}</p>
        </div>
    ));

    return (
        <div>
            <h1 className='center'>About</h1>
            {commentList}
        </div>
    )
}

export default Rainbow(About);

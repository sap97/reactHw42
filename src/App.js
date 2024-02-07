import React, { useState } from 'react';
import CommentForm from './Posts/CommentForm';
import './App.css';


const App = () => {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div >
      <div >
      <h1 className="wrapper">Comment Form</h1>
      <CommentForm onCommentSubmit={handleCommentSubmit} />
      <hr />
      <h2 className="wrapper">Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>Name:</strong> {comment.name} <br />
            <strong>Email:</strong> {comment.email} <br />
            <strong>Body:</strong> {comment.body}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default App;

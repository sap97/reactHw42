import React, { useState } from 'react';
import styles from './CommentForm.module.css'

const CommentForm = ({ onCommentSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          body: body
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('New comment:', data);
      
      onCommentSubmit(data);
      
      setName('');
      setEmail('');
      setBody('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <label>Comment:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}required />
      <button className={styles.submit} type="submit">Post comment</button>
    </form>
  );
};

export default CommentForm;

import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CommentBoxUpdate = () => {
  const [comment, setComment] = useState({});

  const { id } = useParams();
  //fecthing
  useEffect(() => {
    const url = `https://shrouded-dusk-24766.herokuapp.com/comment/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);
  //update comment

  //update change name
  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedfullComment = {
      name: updatedName,
      comment: comment.comment,
      raiting: comment.raiting,
    };
    setComment(updatedfullComment);
  };
  //raiting
  const handleRaitingChange = (e) => {
    const updatedRaiting = e.target.value;
    const updatedfullComment = {
      name: comment.name,
      comment: comment.comment,
      raiting: updatedRaiting,
    };
    setComment(updatedfullComment);
  };

  //update change comment
  const handleCommentChange = (e) => {
    const updatedComment = e.target.value;
    // const updatedfullComment = { ...comment };
    // updatedfullComment.comment = updatedComment;
    const updatedfullComment = {
      name: comment.name,
      comment: updatedComment,
      raiting: comment.raiting,
    };
    setComment(updatedfullComment);
  };
  //setting changed comment
  const handleUpdateComment = (e) => {
    const url = `https://shrouded-dusk-24766.herokuapp.com/comment/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          alert('Hye!! your Comment is updated Successfylly');
          setComment({});
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      {/* <h1>Updating comment name:: comment:: id</h1> */}
      <p className='fst-normal'>
        {comment.name}:: {comment.comment}::{comment.raiting}::
        {id}
      </p>

      <Container>
        <h2 className='mt-5 pb-4 fw-bold'>
          Please Update/Edit <span className=' text-info'>Your Comments</span>
        </h2>
        {/* <h2>Comment Box</h2> */}
        <Form onSubmit={handleUpdateComment}>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              onChange={handleNameChange}
              value={comment.name || ''}
              placeholder='name'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Raiting</Form.Label>
            <Form.Control
              type='number'
              onChange={handleRaitingChange}
              value={comment.raiting || ''}
              placeholder='raiting number'
            />
          </Form.Group>
          {/* comment */}
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as='textarea'
              type='text'
              onChange={handleCommentChange}
              value={comment.comment || ''}
              placeholder='Share your Thoughts...........'
              rows={3}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Publish my Comments
          </Button>
        </Form>
      </Container>
      <Link to='/home'>
        <Button className='btn btn-primary btn-lg mt-5'>Back to home</Button>
      </Link>
    </div>
  );
};

export default CommentBoxUpdate;

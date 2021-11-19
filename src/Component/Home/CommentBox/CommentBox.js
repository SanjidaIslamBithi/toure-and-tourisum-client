import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CommentBox = () => {
  const nameRef = useRef();
  const commentRef = useRef();
  const raitingRef = useRef();
  const handleAddComment = (e) => {
    const name = nameRef.current.value;
    const comment = commentRef.current.value;
    const raiting = raitingRef.current.value;
    //name,comment read by ref

    const newComment = { name, comment, raiting };
    //setting new comment

    fetch('https://shrouded-dusk-24766.herokuapp.com/comment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newComment),
    })
      //posting comments here
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Your Comment is added.');
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <h2 className='mt-5 pb-4 fw-bold'>
          Please Add <span className=' text-info'>Your Thoughts</span>
        </h2>
        {/* <h2>Comment Box</h2> */}
        <Form onSubmit={handleAddComment}>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' ref={nameRef} placeholder='name' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Raiting</Form.Label>
            <Form.Control
              type='number'
              ref={raitingRef}
              placeholder='within 1-5'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as='textarea'
              type='text'
              ref={commentRef}
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

export default CommentBox;

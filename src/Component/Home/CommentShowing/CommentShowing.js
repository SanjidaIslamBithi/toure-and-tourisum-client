import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CommentShowing = () => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch('https://shrouded-dusk-24766.herokuapp.com/comment')
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  //deleting comment

  const handleDeleteComment = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      const url = `https://shrouded-dusk-24766.herokuapp.com/comment/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('removed comment successfully');
            const remainingComments = comment.filter(
              (comnt) => comnt._id !== id
            );
            setComment(remainingComments);
          }
        });
    }
  };

  return (
    <div>
      <Container className='shadow-lg mt-5 p-3 mb-5 bg-body rounded'>
        {/* <h2>total comments: {comment.length}</h2> */}

        <div className='text-center'>
          <h2 className='mt-5 pb-4 fw-bold'>
            Clients <span className='text-brand text-info'>Reviews</span>
          </h2>
        </div>
        <div className='d-flex justify-content-center my-5'>
          <div className='row w-75'>
            {comment.map((comnt) => (
              <div
                className='col-md-4 py-md-3 my-md-3 my-2  pt-5 pb-2'
                key={comnt._id}
              >
                <Card border='info' style={{ width: '18rem' }}>
                  <Card.Header> Client Name: {comnt.name}</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Raiting:
                      <Rating
                        initialRating={comnt.raiting}
                        emptySymbol='far fa-star icon-color'
                        fullSymbol='fas fa-star icon-color'
                        readonly
                      ></Rating>
                    </Card.Title>
                    <Card.Text>{comnt.comment}</Card.Text>
                    <Link to={`/update/${comnt._id}`}>
                      <Button variant='info'>edit</Button>
                    </Link>

                    <Button
                      onClick={() => handleDeleteComment(comnt._id)}
                      variant='info'
                    >
                      remove
                    </Button>
                  </Card.Body>
                </Card>
                {/* <p className='text-lg-start fs-4 fw-bold text-info font-monospace '>
                  Client Name: {comnt.name}
                </p>

                <p className='text-sm-start fs-6 fw-normal font-monospace shadow-lg p-3 mb-5 bg-body border border-info rounded'>
                  Thoughts: {comnt.comment}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </Container>
      {/* linking to write new comments page */}
      <Link to='/commentbox'>
        <h5 className='text-end'>want to share your thoughts</h5>
      </Link>
    </div>
  );
};

export default CommentShowing;

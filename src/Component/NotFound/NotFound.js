import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/4040page.jpg';

const NotFound = () => {
  return (
    <div>
      <img style={{ width: '50%' }} src={notfound} alt='' />
      <br />

      <Link to='/'>
        <Button variant='outline-info' size='lg'>
          Go back to home page
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;

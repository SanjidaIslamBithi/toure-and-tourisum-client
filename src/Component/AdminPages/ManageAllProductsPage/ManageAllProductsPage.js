import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Col, Container, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const ManageAllProductsPage = () => {
  const [topproducts, setTopproducts] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch('https://shrouded-dusk-24766.herokuapp.com/allservices')
      .then((res) => res.json())
      .then((data) => setTopproducts(data));
  }, []);
  const handleDelete = (id) => {
    const url = `https://shrouded-dusk-24766.herokuapp.com/allservices/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert('from top services one item is deleted');
          setSuccess(true);
          const remaining = topproducts.filter(
            (topproduct) => topproduct._id !== id
          );
          setTopproducts(remaining);
        }
      });
  };
  return (
    <div>
      <Container>
        <h2 className='mt-5 pb-4 fw-bold'>
          {' '}
          <span className=' text-info'>Deleting Services </span> from explore
          services page
        </h2>
        <Row className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-4 ms-5 g-5'>
          <div>
            <Col>
              <Link to='/home'>
                <img src={logo} alt='' className='logo w-25' />
              </Link>
              <Dashboard />
            </Col>
          </div>
          {topproducts.map((topproduct) => (
            <div key={topproduct._id}>
              <Col className='position-relative'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant='top' src={topproduct.img} />
                  <Card.Body>
                    <Card.Title>{topproduct.name}</Card.Title>
                    <Card.Text>{topproduct.description}</Card.Text>
                    <Button
                      variant='primary'
                      onClick={() => handleDelete(topproduct._id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
                {/* <h3>{topproduct.name}</h3>
              <button onClick={() => handleDelete(topproduct._id)}>Delete</button> */}
              </Col>
            </div>
          ))}
        </Row>
        {success && (
          <Alert variant='success'>
            <FontAwesomeIcon icon={faCheckCircle} />A Service is deleted
            successfully{' '}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default ManageAllProductsPage;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product }) => {
  const { _id, name, price, description, img } = product;

  return (
    <>
      <Col className='position-relative'>
        <Card style={{ width: '18rem' }} className='shadow-lg'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{price}</Card.Text>
            <Link to={`/purchase/${_id}`}>
              <Button variant='info'>
                Buy now
                <FontAwesomeIcon icon={faShoppingCart} />
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Product;

import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Product from '../Product/Product';
import loading from '../../../images/spin.gif';
const Products = () => {
  const { products } = useAuth();

  return (
    <div id='products'>
      <h2 className='mt-5 pb-4 fw-bold'>
        Best Selling <span className=' text-info'>Products</span>
      </h2>
      <Row xs={1} md={3} className='mt-4 ms-5  g-5 mb-5'>
        {products.length === 0 && (
          <img src={loading} alt='loading' className='mx-auto w-50' />
        )}
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;

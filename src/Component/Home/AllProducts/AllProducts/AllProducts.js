import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Allproduct from '../AllProduct/Allproduct';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://shrouded-dusk-24766.herokuapp.com/allservices')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div id='allproducts'>
      <h2 className='mt-5 pb-4  fs-3 fw-bold'>
        Explore<span className=' text-info'> Here</span>
      </h2>

      <Row xs={1} md={3} className='mt-4 ms-5 g-5 mb-5'>
        {products.map((product) => (
          <Allproduct key={product._id} product={product}></Allproduct>
        ))}
      </Row>
    </div>
  );
};

export default AllProducts;

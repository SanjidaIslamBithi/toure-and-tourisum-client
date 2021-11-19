import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import './AddProducts.css';

const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post('https://shrouded-dusk-24766.herokuapp.com/topservices', data)
      .then((res) => {
        //   console.log(res);
        if (res.data.insertedId) {
          alert('added new product in All successfully');
          setSuccess(true);
          reset();
        }
      });
  };
  return (
    <div className='add-products pt-5 mb-5'>
      {/* <h2>Please Add a Service</h2> */}

      <Container>
        <Row>
          <Col md='auto'>
            <Dashboard />
          </Col>
          <Col md='auto'>
            {' '}
            <h2 className='mt-5 pb-4 fw-bold'>
              Please<span className=' text-info'> Add Services </span>for home
              page
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register('name', { required: true, maxLength: 20 })}
                placeholder='Name'
              />
              <textarea
                {...register('description')}
                placeholder='Description'
              />
              <input type='number' {...register('price')} placeholder='price' />
              <input {...register('img')} placeholder='image url' />
              <input type='submit' className='bg-info' />
            </form>
            {success && (
              <Alert variant='success'>
                <FontAwesomeIcon icon={faCheckCircle} />
                Added new service in top service successfully{' '}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProducts;

// import axios from 'axios';
// import React from 'react';
// import { useForm } from 'react-hook-form';

// const AddProducts = () => {
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);

//     axios.post('https://shrouded-dusk-24766.herokuapp.com/top_products', data).then((res) => {
//       console.log(res);
//       if (res.data.insertedId) {
//         alert('added successfully');
//         reset();
//         //used rest to remove uploading data from form
//       }
//     });
//   };
//   return (
//     <div
//       className='add-products
//         '
//     >
//       <h2>Please Add a Service</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           {...register('name', { required: true, maxLength: 20 })}
//           placeholder='Name'
//         />
//         <textarea {...register('description')} placeholder='Description' />
//         <input type='number' {...register('price')} placeholder='price' />
//         <input {...register('img')} placeholder='image url' />
//         <input type='submit' />
//       </form>
//     </div>
//   );
// };

// export default AddProducts;

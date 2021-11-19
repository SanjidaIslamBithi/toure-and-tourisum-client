import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import ClientBarPage from '../ClientBarPage/ClientBarPage';

const Purchase = () => {
  const { products } = useAuth();
  const { productId } = useParams();
  // const [topproducts, setTopproducts] = useState({});
  const { user } = useAuth();
  const history = useHistory();
  const { name, price, _id } = products;
  const selectedProduct = products.filter(
    (product) => product._id === productId
  );
  // console.log(selectedProduct);
  const initialInfo = {
    name: user.displayName,
    email: user.email,
    phone: '',
    // productname: selectedProduct[0].name,
    // productprice: selectedProduct[0].price,
  };

  //initialinfo
  const [buyingInfo, setBuyingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...buyingInfo };
    newInfo[field] = value;
    // console.log(newInfo);
    setBuyingInfo(newInfo);
  };

  // console.log(selectedProduct[0].name);
  //handle on blur if the box statement changed
  const handleBookingSubmit = (e) => {
    // alert('submiting');
    //collect data of form
    // e.preventDeault();
    const information = {
      ...buyingInfo,
      productname: selectedProduct[0].name,
      productprice: selectedProduct[0].price,
      productimg: selectedProduct[0].img,
    };
    // console.log(information);
    // console.log('helo');

    //to send to server the data
    fetch('https://shrouded-dusk-24766.herokuapp.com/allbuyingservices', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(information),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          alert('Purchased successfully');
          history.push('/bookinglist');
        }
      });
    // e.preventDeault();
  };

  return (
    <section>
      {/* {productId.} */}

      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-12 col-12 py-3'>
            {/* <Link to='/home'>
              <img src={} alt='logo' className='w-25' />
            </Link> */}
          </div>
          <div className='col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3'>
            <h2 className='mt-5 pb-4 fw-bold'>
              Product<span className=' text-info'>Buying inFo:</span>
            </h2>
            {/* <h4 className='text-brand'>Product Buying</h4> */}
            <div className='profile'>
              <h4 className='fst-italic'>{user.displayName}</h4>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-3'>
            <ClientBarPage />
          </div>
          <div
            className='col-md-9 col-9 container p-4'
            style={{ backgroundColor: '#E5E5E5' }}
          >
            <form>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Your name'
                  name='name'
                  // onBlur={() =>
                  //   setBuyingInfo(...buyingInfo, { name: user.displayName })
                  // }
                  onBlur={handleOnBlur}
                  defaultValue={user.displayName}
                  required
                />
                <span className='text-danger'>This field is required</span>
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='email'
                  placeholder='Your email address'
                  name='email'
                  defaultValue={user.email}
                  // onBlur={() =>
                  //   setBuyingInfo(...buyingInfo, { name: user.email })
                  // }
                  onBlur={handleOnBlur}
                  required
                />
                <span className='text-danger'>This field is required</span>
              </div>
              <div className='form-group'>
                <input
                  className='form-control'
                  type='number'
                  placeholder='phone number'
                  name='phone'
                  // onChange={(e) =>
                  //   setBuyingInfo(...buyingInfo, { phone: e.target.value })
                  // }
                  onBlur={handleOnBlur}
                  required
                />
                <span className='text-danger'>This field is required</span>
              </div>
              {/* here will be a map so that is anyone wants to some and chose his own product but cant able to do dat map */}
              <div className='form-group mt-3'>
                <input
                  className='form-control'
                  // disabled
                  type='text'
                  placeholder='Product Name'
                  name='productname'
                  defaultValue={selectedProduct[0].name}
                  onBlur={handleOnBlur}
                  required
                />
              </div>
              <div className='form-group mt-3'>
                <input
                  className='form-control'
                  // disabled
                  type='text'
                  placeholder='price'
                  name='productprice'
                  value={selectedProduct[0].price}
                  // onBlur={() =>
                  //   setBuyingInfo(...buyingInfo, {
                  //     productprice: selectedProduct[0].price,
                  //   })
                  // }
                  onBlur={handleOnBlur}
                  required
                />
              </div>

              <div className='form-group'>
                {/* <input
                  onClick={handleBookingSubmit}
                  type='submit'
                  value='Purchase'
                  className='btn btn-success mt-3'
                /> */}
                <Button onClick={handleBookingSubmit}>puchase</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;

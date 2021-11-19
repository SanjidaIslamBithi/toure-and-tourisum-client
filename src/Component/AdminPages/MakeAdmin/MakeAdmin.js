import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUserShield } from '@fortawesome/free-solid-svg-icons';
const MakeAdmin = () => {
  const user = useAuth();
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  // const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch('https://shrouded-dusk-24766.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          alert('congrats!!! made a new Admin');
          // console.log(data);
          //   setEmail('');
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <section className='add-service'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2 col-sm-12 col-12 py-3'>
            <Link to='/home'>
              <img src={logo} alt='' className='logo w-25' />
            </Link>
          </div>
          <div className='col-md-10 col-sm-12 col-12 d-flex justify-content-between py-3'>
            <h4 className='text-brand'>Make Admin</h4>
            <div className='profile'>
              <h4>{user.displayName}</h4>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2 col-2'>
            <Dashboard />
          </div>
          <div
            className='col-md-10 col-10 container p-4'
            style={{ backgroundColor: '#E5E5E5' }}
          >
            <form
              onSubmit={handleAdminSubmit}
              className='form-row py-5 px-4'
              id='myForm'
              style={{ backgroundColor: '#fff', borderRadius: '10px' }}
            >
              <div className='form-group col-md-6'>
                <label htmlFor='email'>Email</label>
                <input
                  onBlur={handleOnBlur}
                  type='email'
                  name='email'
                  placeholder='admin@gmail.com'
                  className='form-control'
                />
              </div>
              <div
                className='form-group col-md-6'
                style={{ paddingTop: '31px' }}
              >
                <button type='submit' className='btn btn-info'>
                  Submit
                </button>
              </div>
            </form>
            {success && (
              <Alert variant='success'>
                <FontAwesomeIcon icon={faUserShield} />
                Admin made!!!{' '}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;

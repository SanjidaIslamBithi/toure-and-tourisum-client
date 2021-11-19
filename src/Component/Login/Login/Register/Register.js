import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(field, value, newLoginData);
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    // alert('helo');
    if (loginData.password !== loginData.password2) {
      alert('hey! your password didnot matched');
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        {!isLoading && (
          <Form onSubmit={handleLoginSubmit}>
            <h1>Register Here</h1>
            <Form.Group className='pt-5 mb-5' controlId='formBasicEmail'>
              <Form.Label>Write your nameName</Form.Label>
              <Form.Control
                placeholder='Enter your name'
                name='name'
                onBlur={handleOnBlur}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                name='email'
                onBlur={handleOnBlur}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                name='password'
                onBlur={handleOnBlur}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>rewrite-Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password2'
                name='password2'
                onBlur={handleOnBlur}
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Register
            </Button>
            <NavLink to='/login'>
              <h4>Already Register? Please LogIn</h4>{' '}
            </NavLink>
          </Form>
        )}
        {isLoading && <Spinner animation='border' />}
        {user?.email && (
          <Alert variant='success'>registered successfully!!</Alert>
        )}
        {authError && <Alert variant='danger'>{authError}</Alert>}
      </Container>
    </div>
  );
};

export default Register;

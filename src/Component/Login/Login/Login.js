import React, { useState } from 'react';
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    // alert('helo');
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, history);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div>
      <Container className='mt-5'>
        <Row>
          <Col sm={8}>
            <h1>Login Here</h1>

            <Form onSubmit={handleLoginSubmit} size='sm'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>

                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  name='email'
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={handleOnChange}
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                LogIn
              </Button>
              <NavLink to='/register'>
                <h4>New User? Please Register!</h4>{' '}
              </NavLink>
            </Form>
            {isLoading && <Spinner animation='border' />}
            {user?.email && <Alert variant='success'>LogedIn!!</Alert>}
            {authError && <Alert variant='danger'>{authError}</Alert>}
          </Col>
          <p>
            ------------------------------------------------------------------------------------------
          </p>
          <Button
            variant='primary'
            size='lg'
            className='mb-5'
            onClick={handleGoogleSignIn}
          >
            GoogleSignIn
          </Button>

          {/* <Col sm={4}>
            <Image src={ima1} alt='' />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Login;

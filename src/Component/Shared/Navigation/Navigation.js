import React from 'react';
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Navigation.css';
// import AddallProducts from '../../AdminPages/AddallProducts/AddallProducts';
// import MakeAdmin from '../../AdminPages/MakeAdmin/MakeAdmin';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';
// import AddProducts from '../../AdminPages/AddProducts/AddProducts';

const Navigation = () => {
  const { user, logout } = useAuth();
  // let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        sticky='top'
        bg='myRed'
        variant='light'
        className='fs-5 fw-bold'
      >
        <Container>
          <Navbar.Brand href='/home'>
            <img src={logo} alt='' width='120px' height='100px' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/home'>Home</Nav.Link>
              <Nav.Link as={HashLink} to='/home#products'>
                PopularServices
              </Nav.Link>
              <Nav.Link as={Link} to='/allproducts'>
                ExploreAllServices
              </Nav.Link>
              <Nav.Link as={Link} to='/aboutus'>
                AboutUs
              </Nav.Link>
              <Nav.Link as={Link} to='/bookinglist'>
                BookingList
              </Nav.Link>
              {/* <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Navbar.Text>
                Signed in as: <a href='#login'>{user?.displayName}</a>
                <Image
                  className='justify-content-end'
                  src={user.photoURL}
                  size='sm'
                  alt=''
                  roundedCircle
                />
              </Navbar.Text>
              {user?.email ? (
                <div>
                  {/* <Dashboard></Dashboard> */}

                  {/* {!admin && (
                    <h4 className='text-danger'>Sorry! You are not admin. </h4>
                  )} */}
                  {admin && (
                    <NavDropdown title='Admin' id='collasible-nav-dropdown'>
                      <NavDropdown.Item as={Link} to='/addproducts'>
                        Add top products for home
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to='/managehomeproducts'>
                        Manage top products for home
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to='/addallproducts'>
                        Add all products
                      </NavDropdown.Item>

                      <NavDropdown.Item as={Link} to='/manageallproducts'>
                        Manage all products
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to='/makeadmin'>
                        Make admin
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to='/allorderproduct'>
                        Manage/See all orderd
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                  <Button onClick={logout} variant='secondary'>
                    Logout
                  </Button>
                </div>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Switch>
        <Route exact path={path}>
          <AddallProducts></AddallProducts>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <AdminRoute path={`${path}/addDoctor`}>
          <AddProducts></AddProducts>
        </AdminRoute>
      </Switch> */}
    </div>
  );
};

export default Navigation;

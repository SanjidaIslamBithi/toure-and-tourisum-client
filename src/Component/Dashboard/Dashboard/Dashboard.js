import React from 'react';
import { Nav } from 'react-bootstrap';

import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  return (
    <div>
      {!admin && <h4 className='text-danger'>Sorry! You are not admin. </h4>}
      {admin && (
        <div>
          <Nav className='flex-column'>
            <Nav.Link as={Link} to='/addproducts'>
              Add top products for home
            </Nav.Link>
            <Nav.Link as={Link} to='/managehomeproducts'>
              Manage top products for home
            </Nav.Link>
            <Nav.Link as={Link} to='/addallproducts'>
              Add all products
            </Nav.Link>
            <Nav.Link as={Link} to='/manageallproducts'>
              Manage all products
            </Nav.Link>
            <Nav.Link as={Link} to='/makeadmin'>
              Make admin
            </Nav.Link>
            <Nav.Link as={Link} to='/allorderproduct'>
              Manage/See all orderd
            </Nav.Link>
          </Nav>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

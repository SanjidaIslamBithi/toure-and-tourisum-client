import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import NotFound from './Component/NotFound/NotFound';

import Products from './Component/Home/Products/Products';
import Login from './Component/Login/Login/Login';

import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Component/Login/Login/Register/Register';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import Purchase from './Component/ClientPage/PurchasePage/Purchase';
import AddProducts from './Component/AdminPages/AddProducts/AddProducts';
import ManageAllProducts from './Component/AdminPages/ManageAllProducts/ManageAllProducts';
import CommentBox from './Component/Home/CommentBox/CommentBox';
import Navigation from './Component/Shared/Navigation/Navigation';
import Footer from './Component/Shared/Footer/Footer';
import CommentBoxUpdate from './Component/Home/CommentBoxUpdate/CommentBoxUpdate';
import CommentShowing from './Component/Home/CommentShowing/CommentShowing';
import ClientBookedList from './Component/ClientPage/ClientBookedList/ClientBookedList';
import AllProducts from './Component/Home/AllProducts/AllProducts/AllProducts';
import AddallProducts from './Component/AdminPages/AddallProducts/AddallProducts';
import ManageAllProductsPage from './Component/AdminPages/ManageAllProductsPage/ManageAllProductsPage';
import UpdateHomeProducts from './Component/AdminPages/UpdateHomeProducts/UpdateHomeProducts';
import MakeAdmin from './Component/AdminPages/MakeAdmin/MakeAdmin';
import AllOrders from './Component/AdminPages/AllOrders/AllOrders';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import AboutUs from './Component/Home/AboutUs/AboutUs';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/products'>
              <Products />
            </Route>
            <Route path='/aboutus'>
              <AboutUs />
            </Route>
            <PrivateRoute path='/allproducts'>
              <AllProducts />
            </PrivateRoute>
            <PrivateRoute path='/purchase/:productId'>
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path='/bookinglist'>
              <ClientBookedList />
            </PrivateRoute>
            <PrivateRoute path='/commentbox'>
              <CommentBox />
            </PrivateRoute>
            <PrivateRoute path='/commentadd'>
              <CommentShowing />
            </PrivateRoute>
            <PrivateRoute path='/update/:id'>
              <CommentBoxUpdate />
            </PrivateRoute>
            <PrivateRoute path='/updateproduct'>
              <UpdateHomeProducts />
            </PrivateRoute>

            <PrivateRoute path='/managehomeproducts'>
              <ManageAllProducts />
            </PrivateRoute>
            <PrivateRoute path='/manageallproducts'>
              <ManageAllProductsPage />
            </PrivateRoute>
            <PrivateRoute path='/addproducts'>
              <AddProducts />
            </PrivateRoute>
            <PrivateRoute path='/addallproducts'>
              <AddallProducts />
            </PrivateRoute>
            <PrivateRoute path='/makeadmin'>
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path='/allorderproduct'>
              <AllOrders />
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/register'>
              <Register />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

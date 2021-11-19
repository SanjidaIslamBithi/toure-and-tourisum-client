import {
  faClipboardCheck,
  faCommentAlt,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ClientBarPage = () => {
  return (
    <div className='sidebar d-flex flex-column'>
      <Link to='/purchase/:productId' className='py-1'>
        <h6 className='d-inline text-brand'>
          <FontAwesomeIcon icon={faShoppingCart} className='mr-2' /> Service
          Booking
        </h6>
      </Link>
      <Link to='/bookinglist' className='py-1'>
        <h6 className='d-inline  text-brand'>
          <FontAwesomeIcon icon={faClipboardCheck} className='mr-2' /> Booking
          List
        </h6>
      </Link>
      <Link to='/commentbox' className='py-1'>
        <h6 className='d-inline  text-brand'>
          <FontAwesomeIcon icon={faCommentAlt} className='mr-2' /> Add Review
        </h6>
      </Link>
    </div>
  );
};

export default ClientBarPage;

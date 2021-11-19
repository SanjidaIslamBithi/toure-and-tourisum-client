import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkedAlt,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='left-container text-start'>
                <h1>
                  TravelWith<span className='text-primary'>BD</span>
                </h1>
                <div className='icons-container d-flex text-center '>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
                  </div>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className='mt-4 '>
                  <small className='fst-italic'>
                   Travel is happiness!!!
                  </small>
                </p>

                <p className='mt-5'>
                  <small>TravelBD © . All rights reserved.</small>
                </p>
              </div>
            </div>
            {/* linking us with nenu */}
            <div className='col-md-2'>
              <div className='footer-menu-container'>
                {/* <ul>
                 <Link to="/home" className="menu-linker"> <li className="footer-menu">Home</li></Link>
                 <Link to="/services"  className="menu-linker"><li className="footer-menu">Services</li></Link>
                 <Link to="/aboutus"  className="menu-linker"><li className="footer-menu">Contact us</li></Link>
                 <Link to="/contactus"  className="menu-linker"><li className="footer-menu"> About us</li></Link>
                  
                  
                </ul> */}
              </div>
            </div>
            <div className='col-md-5'>
              <div className='right-footer-container'>
                <h3>Sign up for the newsletter</h3>
                <input
                  className='footer-input'
                  type='text'
                  placeholder='Enter Email'
                />
                <div className='phone d-flex align-items-center justify-content-center mt-4'>
                  <div className='foter-phone-icon'>
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+1 8 800 555 35 35</h5>
                  </div>
                </div>
                <div className='map d-flex align-items-center justify-content-center'>
                  <div className='foter-phone-icon'>
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      160 Broadway, New York, NY 10038,
                      <br /> 102 1st Avenue, New York, NY 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

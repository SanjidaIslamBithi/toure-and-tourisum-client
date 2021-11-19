import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import aboutus from '../../../images/logo.png';
const AboutUs = () => {
  return (
    <div>
      <Container className='shadow-lg p-3 mb-5 bg-body rounded mt-5'>
        <h2 className='fs-1 fw-bold mt-5 mb-5'>
          Abou<span className=' text-info'>Us</span>
        </h2>
        <Row className='mt-5 mb-5'>
          <Col sm={8}>
            <Image src={aboutus} rounded className='mb-3 w-75' />
          </Col>
          <Col>
            <p className='text-start fs-5 fst-normal'>
              An online platform for travel lovers and travel companies that
              provides all kinds travel related detail information in the most
              organised way in Bangla, English and video version through the
              website travelbd.xyz and also provides promotional services like
              video making, content development, digital marketing to the travel
              companies. So, when a traveller thinks about travelling a place,
              we help them with all the information and connect them to the
              services they can get while travelling
            </p>
          </Col>
        </Row>
        {/* <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default AboutUs;

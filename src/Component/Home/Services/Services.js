import React from 'react';
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';
import pic from '../../../images/Bichana-Kandi-Sylhet.jpg';
const Services = () => {
  return (
    //extra as bonus
    <Container className='mt-4 ms-5 g-5 shadow-lg' xs={6} md={4}>
      <Row>
        <Col>
          <h2 className='mt-5 pb-4 fw-bold'>
            Some Common <span className=' text-info'>Question answers</span>
          </h2>
          <Image src={pic} rounded className='mb-3' />
        </Col>
        <Col className='mt-5 pb-4'>
          <Accordion
            className='mt-5 ms-5 g-5 shadow-lg pb-4 bg-light border'
            defaultActiveKey='0'
          >
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Want to know about us </Accordion.Header>
              <Accordion.Body>
                Our company name is TravelWithBD. We are working with Tourists
                and tourisum for almost 4 years. We have clients world wide.
                people who are interested in traveling bangladesh at
                minimum-cost contacts us.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Is our services expensive?</Accordion.Header>
              <Accordion.Body>
                we charge as low as possible. our motto is to give our client
                happy and safe journy.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>
                What is best season to travel?
              </Accordion.Header>
              <Accordion.Body>
                In Bangladesh ever season is special. in every season every
                location beautifies its own way.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;

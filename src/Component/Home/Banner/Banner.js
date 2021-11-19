import React from 'react';
import { Carousel } from 'react-bootstrap';
import im1 from '../../../images/sajek-valley-1-1.jpg';
import im2 from '../../../images/tra2.jpg';
import im3 from '../../../images/tra3.jpg';
const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            height={500}
            src={im1}
            alt='First slide'
          />

          {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            height={500}
            src={im2}
            alt='Second slide'
          />

          {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            height={500}
            src={im3}
            alt='Third slide'
          />

          {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;

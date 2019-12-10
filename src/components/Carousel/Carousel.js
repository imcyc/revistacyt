import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function ControlledCarousel() {
  return (
    <>
      <div className="filtro"></div>
      <Carousel fade={true} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src="/images/bkg.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src="/images/bkg1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src="/images/bkg2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 min-vh-100"
          src="/images/bkg3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
    
  );
}

export default ControlledCarousel;
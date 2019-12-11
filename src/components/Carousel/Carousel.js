import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';

function ControlledCarousel(props) {
  return (
    <>
      <div className="filtro"></div>
      <Carousel fade={true} controls={false}>
        {props.imagesHome.map(image => (
          <Carousel.Item key={image}>
            <img
              className="d-block w-100 min-vh-100"
              src={image}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default ControlledCarousel;
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/pages/Main.css';
import slide1 from '../images/wetiny_banner4.png';
import slide2 from '../images/wetiny_banner5.png';
import slide3 from '../images/wetiny_banner46.png';

function main() {
  return (
    <>
      <style type='text/css'>
        {`
.banner-con{
  width: 100%;
  margin: 0 auto;
  margin-bottom: 90px;
  
}
`}
      </style>
      <div className='banner-con'>
        <Carousel fade>
          <Carousel.Item>
            <img className='d-block w-100' src={slide1} alt='First slide' />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={slide2} alt='Second slide' />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={slide3} alt='Third slide' />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default main;

import React from 'react';
import { Image } from 'react-bootstrap';
import health1 from './assests/health1.jpg'
import health2 from './assests/health2.jpg'
import health3 from './assests/health3.webp'
import health4 from './assests/health4.jpg'
import health5 from './assests/health5.webp'

function ExampleCarouselImage({ text }) {
  return (
    <div>
      
      <Image src={health1} alt="health" />
      <Image src={health2} alt="health" />
      <Image src={health3} alt="health" />
      <Image src={health4} alt="health" />
      <Image src={health5} alt="health" />

      <p>{text}</p>
    </div>
  );
}

export default ExampleCarouselImage;
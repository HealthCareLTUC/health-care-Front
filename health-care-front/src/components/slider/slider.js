import Carousel from 'react-bootstrap/Carousel';
import health1 from '../assests/health1.jpg'
import health2 from '../assests/health2.jpg'
import health3 from '../assests/health3.webp'
import health6 from '../assests/health6.jpg'
import health4 from '../assests/health4.jpg'
import { Image } from 'react-bootstrap';




function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark"        className="slider">
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={health1}
          alt="First slide"
         
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={health4}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={health4}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
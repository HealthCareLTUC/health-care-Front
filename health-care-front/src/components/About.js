import Carousel from 'react-bootstrap/Carousel';

function About() {
  return (
    <>
    <Carousel style={{ height: "500px",marginTop:"30px",width:"1000px" ,marginLeft:"170px"}}>
          <Carousel.Item>
              <img
                  className="d-block w-100"
                  src="https://th.bing.com/th/id/OIP.4tR6xgryLo0WTogsESSVsQHaG-?pid=ImgDet&rs=1"
                  alt="First slide"
                  style={{ width: "0", height: "500px" }} />
              <Carousel.Caption >
                  <h3 style={{color:"black"}} >First slide label</h3>
                  <p style={{color:"black"}} >The project aims to create a healthcare web page that provides patients with the ability to search for doctors based on their medical specialty, location, and contact information. Patients can also view information about the medical qualifications of different doctors and their appointment schedules. Patients can then select a time slot for their appointment and make a reservation.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
              <img
                  className="d-block w-100"
                  src="https://th.bing.com/th/id/R.465af15f6684b1ea0d799fda31c951e3?rik=zYX1rOxO0Hbl9w&riu=http%3a%2f%2fwww.erounds.com%2fwp-content%2fuploads%2f2014%2f12%2fDollarphotoclub_56409865.jpg&ehk=g2UpRDbD5z%2bGxxgc7jziitfwe8g2wV5eiqJUR4NxNb8%3d&risl=1&pid=ImgRaw&r=0"
                  alt="Second slide"
                  style={{ width: "0", height: "500px" }} />

              <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "500px" }}>
              <img
                  className="d-block w-100"
                  src="https://th.bing.com/th/id/OIP.gQYjjYliYdp_YwyLsqVcZwHaE8?pid=ImgDet&rs=1"
                  alt="Third slide" />

              <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel></>
  );
}

export default About;
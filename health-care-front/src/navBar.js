import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../assests/iconDoctors.png'
// import './Navbar.css';
function Navbars() {
  return (
    <div  className='nav'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      {/* <Image src={logo} sm   className='logo' />  */}
        <Navbar.Brand  style={{ color: '#0079FF', fontSize: '35px' }}href="#">Health Care</Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{ color: '#0079FF', fontSize: '20px' }} href="/">PatientPage</Nav.Link>
            <Nav.Link style={{ color: '#0079FF', fontSize: '20px' }} href="/profile">patient profile</Nav.Link>
            <Nav.Link  style={{ color: '#0079FF', fontSize: '20px' }} href="#" disabled>
            Pharmacy 
            </Nav.Link>
            <NavDropdown   title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Payment</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          < Button variant="outline-primary">Search</Button>{' '}

          </Form>
          < Button variant="outline-primary"  size="lg">Login</Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default  Navbars

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./NavBar.css"
import logo from '../assests/iconDoctors.png'

//import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {
  return (
    <div className='nav' >
    <Navbar  expand="lg" className="bg-body-tertiary" style={{width:'100%'}} >
    <Container  >
    <Image src={logo} sm   className='logo'  style={{width:'50px'}}/> 
      <Navbar.Brand href="#home">HealthCare</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
          <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
          <Nav.Link as={Link} to={"/Pharmacy"}>Pharmacy</Nav.Link>
          <Nav.Link as={Link} to={"/Profile"}>Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 </div>

);
}



export default  NavBar














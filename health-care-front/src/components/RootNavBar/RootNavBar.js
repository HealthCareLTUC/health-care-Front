import './RootNavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function RootNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/5/57/Caduceus.svg' alt='healthcare'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">HealthCare</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default RootNavBar;
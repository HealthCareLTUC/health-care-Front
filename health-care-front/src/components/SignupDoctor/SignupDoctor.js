import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';

function SignupDoctor({ handleShow, handleClose, show }) {
  const [similar, setSimilar] = useState(false);
  useEffect(() => {
    const password1 = document.querySelector("#inputPassword5")?.value;
    const password2 = document.querySelector("#inputPassword6")?.value;
    setSimilar(password1 === password2);
  }, []);

  const handlePasswordChange = () => {
    const password1 = document.querySelector("#inputPassword5")?.value;
    const password2 = document.querySelector("#inputPassword6")?.value;
    setSimilar(password1 === password2);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Doctor's Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control id="username" type="text" placeholder="UserName" />
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={handlePasswordChange}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>
          <Form.Label htmlFor="inputPassword6">Repeat Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword6"
            onChange={handlePasswordChange}
          />
          <Form.Text id="passwordHelpBlock" muted>
            {similar ? "The passwords match" : "The passwords don't match"}
          </Form.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignupDoctor;

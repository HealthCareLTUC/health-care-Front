import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

function SignupPatient({ handleShow, handleClose, show }) {
  const [similar, setSimilar] = useState(false);

  useEffect(() => {
    const password1 = document.querySelector("#inputPassword7").value;
    const password2 = document.querySelector("#inputPassword8").value;
    setSimilar(password1 === password2);
  }, []);

  const handlePasswordChange = () => {
    const password1 = document.querySelector("#inputPassword7").value;
    const password2 = document.querySelector("#inputPassword8").value;
    setSimilar(password1 === password2);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Patient's Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control id="username" type="text" placeholder="UserName" />
          <Form.Label htmlFor="inputPassword7">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword7"
            aria-describedby="passwordHelpBlock"
            onChange={handlePasswordChange}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>
          <Form.Label htmlFor="inputPassword8">Repeat Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword8"
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

export default SignupPatient;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function LoginPatient({ handleShow, handleClose, show }) {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Patient's Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            placeholder="UserName"
            // value={username}
            // onChange={(e) => setUsername(e.target?.value)}
          />
          <Form.Label htmlFor="inputPassword4">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword4"
            aria-describedby="passwordHelpBlock"
            // value={password}
            // onChange={(e) => setPassword(e.target?.value)}
          />
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

export default LoginPatient;

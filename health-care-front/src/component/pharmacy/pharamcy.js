import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { useState } from "react";

 function Pharamcy() {
    const [drug, setSearchTerm] = useState('');

    const handelinput =(event)=>{

        setSearchTerm(event.target.value);

    }
    const handelsearch =  ()=>{
        const respons=  fetch(`http://localhost:3004/pricename/${drug}`);
        if(respons.ok)
        {
            console.log("okay");
        }
    }
      
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm={4}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handelinput}
            />
            <Button onClick={handelsearch}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
 
export default Pharamcy;
import { Button, Col, Container, Form, Row,Card } from "react-bootstrap";
import { useState } from "react";
 function Pharmacy() {
    const [drug, setSearchTerm] = useState('');
    const [drugList, setDrugList] = useState([]);
    const handelinput =(event)=>{
        setSearchTerm(event.target.value);
    }
    const handelsearch = async () => {  
        const response = await fetch(`http://localhost:3004/pricename/${drug}`); 
        if (response.ok) {
          const data = await response.json(); 
          setDrugList(data);
          console.log(data);
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
      <Row className="mt-4">
        {drugList.map((drug) => (
          <Col key={drug.id} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{drug.generic_name }</Card.Title>
                <Card.Text>{drug.brand_name }</Card.Text>
                <Card.Text>{drug.generic_name }</Card.Text>
                <Card.Text>{drug.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Pharmacy;










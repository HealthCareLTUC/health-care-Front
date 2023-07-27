import React, { useState } from 'react';
import { FormControl, Button, Form } from 'react-bootstrap';

function Pharmacy() {
  const [drugName, setDrugName] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    window.location.href = `https://www.goodrx.com/${drugName}`;
  };

  return (
    <div>
      <h1>Drug Search</h1>
      <Form inline="true" onSubmit={handleSearch}>
        <FormControl type="text" style={{width:"500px",paddingLeft:"50px"}} placeholder="Enter drug name" className="mr-sm-2" value={drugName} onChange={(event) => setDrugName(event.target.value)} />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
}

export default Pharmacy;
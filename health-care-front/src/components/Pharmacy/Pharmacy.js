import { useState } from "react";
import { Card } from "react-bootstrap";
import "./Pharmacy.css"
function Pharmacy() {
  const [drug, setDrug] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const url = `https://healthcare-back.onrender.com/search/${searchTerm}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setDrug({
          drug_name: searchTerm,
          generic_name: data.generic_name,
          brand_name: data.brand_name,
          dosage_form: data.dosage_form,
          pharm_class: data.pharm_class,
        });
      } else {
        setDrug(null);
      }
    } catch (error) {
      console.error(error);
      setDrug(null);
    }
    setIsLoading(false);
  };

  return (
    <div className="c">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter drug name"
        style={{marginTop:"200px",color:"white"}}
      />
      <button className="search-button" onClick={handleSearch}>search
      
</button>

      {isLoading && <div style={{color:"white"}}>Loading...</div>}

      {drug && (
        <div>
          <Card style={{ width: "18rem", marginLeft:"500px" }}>
            <Card.Body>
              <Card.Title>Drug: {drug.drug_name}</Card.Title>
              <Card.Text>Generic Name: {drug.generic_name}</Card.Text>
              <Card.Text>Brand Name: {drug.brand_name}</Card.Text>
              <Card.Text>Dosage Form: {drug.dosage_form}</Card.Text>
              <Card.Text>Pharm Class: {drug.pharm_class}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Pharmacy;

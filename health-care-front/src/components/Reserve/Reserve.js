import React,{useEffect, useState} from 'react'
import { Card , Table} from 'react-bootstrap';
function Reserve() {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetDoctorInfo = async (name) => {
    setIsLoading(true);
    try {
      const url = `https://healthcare-back.onrender.com/searchDocN`; 
      let res = await fetch(url);
      let recivedData = await res.json();
      setDoctor(recivedData);

      if (url.data.length > 0) {
        setDoctor(url.data[0]);
      } else {
        setDoctor(null);
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  useEffect(()=>{
    handleGetDoctorInfo();
  },[])
  console.log(doctor);
  const handleGetAppointments = async (doctorId) => {
    setIsLoading(true);
    try {
      const response = `https://healthcare-back.onrender.com/getAppointment/${doctorId}`;
      let res = await fetch(response);
      let recivedData = await res.json();
      setAppointments(recivedData.data);
    } catch (error) {
      console.error(error);
      // Set an error message state to display to the user
    }
    setIsLoading(false);
  };
  return (
    <div>
      <button onClick={() => handleGetDoctorInfo("Doctor Name")}>
        Get Doctor Info
      </button>
      <button onClick={() => handleGetAppointments(1)}>Get Appointments</button>

      {isLoading && <div>Loading doctor info...</div>}
      {doctor && (
        <div>
          <Card style={{ width: "18rem",height:"200px",marginLeft:"700px" }}>
              <Card.Body>
                <Card.Title>Name: {doctor.name}</Card.Title>
                <Card.Text>Specialty: {doctor.specialty}</Card.Text>
                <Card.Text>Address: {doctor.address}</Card.Text>
                <Card.Text>Phone: {doctor.phone}</Card.Text>
              </Card.Body>
            </Card>
            </div>
      )}
     {appointments.length > 0 && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Patient ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.appointment_id}>
                <td>{appointment.appointment_id}</td>
                <td>{appointment.patient_id}</td>
                <td>{appointment.reservation_date}</td>
                <td>{appointment.reservation_time}</td>
                <td>{appointment.report}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Reserve; 
      
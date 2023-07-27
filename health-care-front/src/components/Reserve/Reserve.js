import React,{useEffect, useState} from 'react'
import { Card , Table,Modal,Button} from 'react-bootstrap';
function Reserve(props) {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const handleGetDoctorInfo = async () => {
    setIsLoading(true);
    try {
      const url = `https://healthcare-back.onrender.com/searchDocN`; 
      let res = await fetch(url);
      let data = await res.json();
     // setDoctor(recivedData);

     if (data && data.length > 0) {
      setDoctor(data[0]);
    } else {
      setDoctor(null);
    }
    setIsLoading(false);
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
  const handleReservation = async () => {
    setIsLoading(true);
    try {
      const url = 'https://healthcare-back.onrender.com/insertappointment';
      const requestBody = {
        doctor_id: doctor.id,
        reservation_date: reservationDate,
        reservation_time: reservationTime,
      };
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      
      handleGetAppointments(doctor.id);
      setReservationDate('');
      setReservationTime('');
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  return (
    <div>
     <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{`${doctor?.name} - ${doctor?.specialty}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

      {isLoading && <div>Loading doctor info...</div>}
      {doctor && (
  <Card style={{ width: '18rem', height: '200px' }}>
    <Card.Body>
      <Card.Title>Name: {doctor.name}</Card.Title>
      <Card.Text>Specialty: {doctor.specialty}</Card.Text>
      <Card.Text>Address: {doctor.address}</Card.Text>
      <Card.Text>Phone: {doctor.phone}</Card.Text>
    </Card.Body>
  </Card>
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
          <h3>Make a Reservation</h3>
        <div>
          <input type="text" placeholder="Reservation Date" value={reservationDate} onChange={(e) => setReservationDate(e.target.value)} />
          <input type="text" placeholder="Reservation Time" value={reservationTime} onChange={(e) => setReservationTime(e.target.value)} />
          <button onClick={handleReservation}>Reservation</button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default Reserve; 
      
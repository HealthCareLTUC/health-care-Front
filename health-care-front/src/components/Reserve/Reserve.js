import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function Reserve() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');

  async function getAppointmentData(doctorName) {
    try {
      const url = `${process.env.REACT_APP_SERVER_URL}/doctors/${doctorName}`;
      const response = await fetch(url);
      const data = await response.json();
      setAppointments(data);
      setError('');
    } catch (error) {
      setError('Error fetching reserve data');
    }
  }
console.log(appointments);
  useEffect(() => {
    getAppointmentData();
  }, []);

  return (
    <div>
      <h2>Reserve</h2>
      {error && <div>{error}</div>}
      {appointments.map((appointment) => (
        <Card key={appointment.appointment_id}>
          <Card.Body>
            <Card.Title>Doctor: {appointment.doctorName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Specialty: {appointment.Specialty}<br/>
              Location: {appointment.location}<br/>
              Phone: {appointment.phone}
            </Card.Subtitle>
            <Card.Text>
              Patient: {appointment.patient_name}<br/>
              Date: {appointment.reservation_date}<br/>
              Time: {appointment.reservation_time}<br/>
              Report: {appointment.report}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Reserve;
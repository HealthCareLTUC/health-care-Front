import './Doctor.css'
import React, { useState, useEffect } from "react";
import axios from "axios";

const Doctor = () => {
    const [doctor, setDoctor] = useState({});
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
      
        axios.get("/DoctorName/DoctorNameHere")
            .then((response) => {
                setDoctor(response.data[0]);
            })
            .catch((error) => {
                console.log("Error fetching doctor details:", error);
            });

       
        axios.get("/DoctorAppointments/DoctorNameHere")
            .then((response) => {
                setAppointments(response.data);
            })
            .catch((error) => {
                console.log("Error fetching appointments:", error);
            });
    }, []);

    const handleEditAppointment = (id, report) => {
        
        axios.put(`/updateAppointment/${id}`, { report })
            .then((response) => {
                console.log("Appointment updated:", response.data);
            })
            .catch((error) => {
                console.log("Error updating appointment:", error);
            });
    };

    const handleDeleteAppointment = (id) => {
     
        axios.delete(`/delAppointment/${id}`)
            .then(() => {
                console.log("Appointment deleted:", id);
               
                setAppointments((prevAppointments) => prevAppointments.filter(appointment => appointment.appointment_id !== id));
            })
            .catch((error) => {
                console.log("Error deleting appointment:", error);
            });
    };

    return (
        <div>
            <h1>Doctor Information</h1>
            <h2>Doctor Name: {doctor.name}</h2>
            <div>
                <h3>Appointments</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Patient</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Report</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment) => (
                            <tr key={appointment.appointment_id}>
                                <td>{appointment.patient}</td>
                                <td>{appointment.reservation_date}</td>
                                <td>{appointment.reservation_time}</td>
                                <td>{appointment.report}</td>
                                <td>
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        handleEditAppointment(appointment.appointment_id, appointment.report);
                                    }}>
                                        <input
                                            type="text"
                                            placeholder="Report"
                                            value={appointment.report}
                                            onChange={(e) => {
                                                setAppointments((prevAppointments) =>
                                                    prevAppointments.map(prevAppointment => {
                                                        if (prevAppointment.appointment_id === appointment.appointment_id) {
                                                            return { ...prevAppointment, report: e.target.value };
                                                        } else {
                                                            return prevAppointment;
                                                        }
                                                    })
                                                );
                                            }}
                                        />
                                        <button type="submit">Edit</button>
                                    </form>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteAppointment(appointment.appointment_id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Doctor;

    
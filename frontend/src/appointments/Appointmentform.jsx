import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './appointments.css'

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: '',
    description: ''
  });
  const [appointments, setAppointments] = useState([]);
  const token = localStorage.getItem('token');
 const baseURL = import.meta.env.VITE_API_BASE_URL;
  // Fetch appointments on mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/appointments`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAppointments(res.data);
    } catch (error) {
      alert("Failed to fetch appointments");
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/api/appointments/book',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      alert(res.data.message);
      setFormData({ name: '', phone: '', reason: '', description: '' });
      fetchAppointments();
    } catch (err) {
      alert("Failed to book appointment");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert("Appointment cancelled");
      fetchAppointments();
    } catch (err) {
      alert("Failed to cancel appointment");
    }
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="reason" placeholder="Reason for Visit" value={formData.reason} onChange={handleChange} required />
        <textarea name="description" placeholder="Description (optional)" value={formData.description} onChange={handleChange} />
        <button type="submit">Book Appointment</button>
      </form>

      <h3>Booked Appointments</h3>
      <div className="appointments-list">
        {appointments.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          appointments.map((appt) => (
            <div key={appt._id} className="appointment-card">
              <h4>{appt.name}</h4>
              <p><strong>Phone:</strong> {appt.phone}</p>
              <p><strong>Reason:</strong> {appt.reason}</p>
              <p><strong>Description:</strong> {appt.description}</p>
              <p><strong>Date:</strong> {new Date(appt.date).toLocaleString()}</p>
              <button onClick={() => handleDelete(appt._id)}>Cancel</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;

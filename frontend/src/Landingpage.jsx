import React from 'react';
import './Landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="hero">
        <h1>Hospital Appointment System</h1>
        <p>Book, manage, and track appointments with ease.</p>
        <a href="/register" className="btn-primary">Get Started</a>
      </header>

     <section className="features">
  <h2>Key Features</h2>
  <div className="feature-grid">
    <div className="feature-card">
      <h3>Register Patient / Doctor</h3>
      <p>Securely register users as patients or doctors with role-based access.</p>
    </div>
    <div className="feature-card">
      <h3>Authenticate Users</h3>
      <p>Login system with JWT-based authentication for secured sessions.</p>
    </div>
    <div className="feature-card">
      <h3>Get Patients / Doctors</h3>
      <p>View all registered users filtered by their role in the system.</p>
    </div>
    <div className="feature-card">
      <h3>Book Appointment</h3>
      <p>Patients can book appointments with available doctors in real-time.</p>
    </div>
    <div className="feature-card">
      <h3>Cancel Appointment</h3>
      <p>Appointments can be easily canceled or rescheduled with one click.</p>
    </div>
  </div>
</section>

      <footer className="footer">
        <p>© 2025 Hospital Appointment System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;

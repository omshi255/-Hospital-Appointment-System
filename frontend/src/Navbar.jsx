// src/Navbar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="navbar">
      <div className="navbar-brand" > <FontAwesomeIcon icon={faHospital} /> Hospital Appointment System</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {!isLoggedIn && (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
           
          </>
        )}
        {isLoggedIn && (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/allusers">Users</Link></li>
             <li><Link to="/appointments">Appoinments</Link></li>
            <li>
              <button className='logout-button'
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload(); // Reload to update the UI
                }}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

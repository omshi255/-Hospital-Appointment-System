// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './User/Createuser.jsx';
import Login from './User/Login.jsx';
import Navbar from './Navbar.jsx';
import AllUsers from './User/Allusers.jsx';
import LandingPage from './Landingpage.jsx';
import Appointmentform from './appointments/Appointmentform.jsx';
import Profile from './User/Profile.jsx';

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={token ? <AllUsers /> : <LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allusers" element={<AllUsers />} /> 
        <Route path="/appointments" element={<Appointmentform/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      localStorage.setItem('token', res.data.token);
      setIsLoggedIn(true);
      alert(res.data.message);
      navigate('/allusers'); 
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/users/logout");
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      alert("Logout successful");
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <div className="login-container">
      <h2>{isLoggedIn ? "Welcome! You're logged in" : "Login"}</h2>

      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Login;

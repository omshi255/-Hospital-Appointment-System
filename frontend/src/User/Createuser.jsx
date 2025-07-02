import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom"; 

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
    const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://hospital-appointment-system-mern-backend.onrender.com/api/users/register",
        formData
      );
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/allusers");
      setIsLoggedIn(true);
      
    } catch (error) {
      console.error(error.response?.data?.message || "Registration failed");
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("https://hospital-appointment-system-mern-backend.onrender.com/api/users/logout");
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      alert("Logout successful");
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <div className="register-container">
      <h2>{isLoggedIn ? "You're already logged in" : "Register"}</h2>

      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>

          <button type="submit">Register</button>
        </form>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Register;

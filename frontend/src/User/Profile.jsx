import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css"; 

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://hospital-appointment-system-mern-backend.onrender.com/api/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      });
      navigate("/profile");
      setUser(res.data);
    } catch (err) {
      console.error("Error fetching profile:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;

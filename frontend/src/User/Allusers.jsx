import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllUsers.css';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get('https://hospital-appointment-system-mern-backend.onrender.com/api/users/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(res.data);
      } catch (error) {
        console.error('Error fetching users:', error.response?.data || error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      <h2>
  {localStorage.getItem("token")
    ? "All Registered Users"
    : "Welcome User"}
</h2>

      <div className="user-cards">
        {users.map(user => (
          <div className={`user-card ${user.role}`} key={user._id}>
            <h3>{user.username}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p className="desc">
              {user.role === 'doctor'
                ? 'A trusted healthcare professional available for appointments.'
                : 'A registered patient looking for medical support.'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;

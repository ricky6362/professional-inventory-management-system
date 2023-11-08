import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/Login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginUser = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        const result = await response.json();
        localStorage.setItem('access_token', result.access_token);
        localStorage.setItem('user_role', result.role);

        switch (result.role) {
          case 'admin':
            navigate('/admin');
            break;
          case 'normalEmployee':
            navigate('/normalemployee');
            break;
          case 'procurementManager':
            navigate('/procurement');
            break;
          default:
            break;
        }

        toast.success('Login successful');
      } else {
        toast.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('An error occurred during login');
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
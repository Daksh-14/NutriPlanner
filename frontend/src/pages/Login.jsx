import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'

export const Login = ({setIsAuthenticated}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('api/user/login', formData);
      setIsAuthenticated(true);
      navigate('/');

    } catch (error) {
      console.log(error);
      setError(error.response.data.data);
      
    } finally {
      setLoading(false);
    }
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={onChangeHandler}
        />
        <br />
        {error && <p className="error">{error}</p>}
        <button disabled={loading}>Login</button>
      </form>
    </div>
  );
}


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css'
import { BackButton } from '../components/BackButton';
import { Loading } from '../components/Loading';

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
    <>
    {loading && <Loading />}
    <BackButton />
    <div className='signup-main-container'>
    <div className="signup-container">
      <h1 className='signup-h1'>Login</h1>
      <form className='signup-form' onSubmit={handleSubmit}>
        <input
          className='signup-input'
          placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          autocomplete="off"
        />
        <br />
        <input
          className='signup-input'
          placeholder='Password'
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={onChangeHandler}
          autocomplete="off"
        />
        <br />
        {error && <p className="error">{error}</p>}
        <div className="signup-wrapper">
          <button className='signup-btn' disabled={loading}>Login</button>
        </div>
      </form>
     </div>
    </div>
    </>
  );
}


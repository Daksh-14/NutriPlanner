import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';

export const Signup = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:""
  });
  const [loading,setLoading] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const submitData = async()=>{
        try {
          setLoading(true);
          const response = await axios.post('api/user/register',formData);
          navigate('/');
        } catch (error) {
          console.log(error);
        }
        finally{
          setLoading(false);
        }
    }
    submitData();
  }

  const onChangeHandler =(e)=>{
    const [name,value] = e.target;
    setFormData((prevData)=>{
      return {
        ...prevData,
        [name] : value
      }
    })
  }

  return (
      <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstname}
          onChange={onChangeHandler}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastname}
          onChange={onChangeHandler}
        />
        <br />
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
        <button className='btn' disabled={loading}>Sign up</button>
      </form>
    </div>
  );
}


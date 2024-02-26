import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import { BackButton } from '../components/BackButton';
import { Loading } from '../components/Loading';

export const Signup = ({setIsAuthenticated}) => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    firstName:"",
    lastName:"",
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
          setIsAuthenticated(true);
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
    const {name,value} = e.target;
    setFormData((prevData)=>{
      return {
        ...prevData,
        [name] : value
      }
    })
  }

  return (
    <>
    {loading && <Loading />}
    <BackButton />
    <div className='signup-main-container'>
      <div className="signup-container">
        <h1 className='signup-h1'>Sign Up</h1>
        <form className='signup-form' onSubmit={handleSubmit}>
          <input
            className='signup-input'
            type="text"
            placeholder='First Name'
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={onChangeHandler}
            autocomplete="off"
          />
          <br />
          <input
            className='signup-input'
            type="text"
            placeholder='Last Name'
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={onChangeHandler}
            autocomplete="off"
          />
          <br />
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
          <div className="signup-wrapper">
          <button className='signup-btn' disabled={loading}>Sign up</button>
          </div>
        </form>
     </div>
    </div>
    </>
  );
}


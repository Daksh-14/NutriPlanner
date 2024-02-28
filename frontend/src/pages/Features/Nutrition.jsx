import React from 'react'
import { useState } from 'react';
import '../../styles/nutrition.css';

export const Nutrition = () => {
  const [formData,setFormData] = useState({
    age:"",
    height:"",
    weight:"",
    gender:"",
    no_days:"",
    no_meals:"",
    weightLoss:""
  });

  const [loading,setLoading] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const submitData = async()=>{
        try {
          setLoading(true);
          const response = await axios.post('/api/nutrition/',formData);
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
    const {name,value,type,checked} = e.target;
    setFormData((prevData)=>{
      return {
        ...prevData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  return (
    <div>
    <div className="nutrition-container">
      <form className='nutrition-form' onSubmit={handleSubmit}>
      <h1>Nutrition Form</h1>
        <label className="nutrition-form-label">
          What is your Age?
          <br />
          <input
            type="number"
            placeholder='Enter Age'
            name="age"
            value={formData.age}
            onChange={onChangeHandler}
            className="nutrition-form-input"
          />
        </label>
        <br />
        <label className="nutrition-form-label">
          What is your Height?
          <br />
          <input
            type="number"
            name="height"
            placeholder='Enter Height'
            value={formData.height}
            onChange={onChangeHandler}
            className="nutrition-form-input"
          />
        </label>
        <br />
        <label className="nutrition-form-label">
          What is your Weight?
          <br />
          <input
            type="number"
            name="weight"
            placeholder='Enter Weight'
            value={formData.weight}
            onChange={onChangeHandler}
            className="nutrition-form-input"
          />
        </label>
        <br />
        <label className="nutrition-form-label">
          What is your Gender?
          <br />
          <label htmlFor="male">
            <input
            className='radio'
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={onChangeHandler}
              checked={formData.gender === "male"}
            /> Male
          </label>
          <br />
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={onChangeHandler}
              checked={formData.gender === "female"}
            /> Female
          </label>
        </label>
        <br />
        <label className="nutrition-form-label">
          How many days do you exercise in a week?
          <br />
          <input
            type="number"
            name="no_days"
            placeholder='Enter no. of days'
            value={formData.no_days}
            onChange={onChangeHandler}
            className="nutrition-form-input"
          />
        </label>
        <br />
        <label className="nutrition-form-label">
         How many meals do you typically have in a day?
         <br />
         <input
           type="number"
           name="no_meals"
           placeholder='Enter no. of meals'
           value={formData.no_meals}
           onChange={onChangeHandler}
           className="nutrition-form-input"
         />
       </label>
       <br />
       <label className="nutrition-form-label">
          How much weight do you want to lose?
          <br />
          <label htmlFor="maintain-weight">
          <input
            type="radio"
            name="weightLoss"
            value="Maintain Weight"
            onChange={onChangeHandler}
            checked={formData.weightLoss === "Maintain Weight"}
            id="maintain-weight"
          /> Maintain Weight
          </label>
          <br />
          <label htmlFor="mild-loss">
          <input
            type="radio"
            name="weightLoss"
            value="Mild Weight Loss"
            onChange={onChangeHandler}
            checked={formData.weightLoss === "Mild Weight Loss"}
            id="mild-loss"
          /> Mild Weight Loss
          </label>
          <br />
          <label htmlFor="weight-loss">
          <input
            type="radio"
            name="weightLoss"
            value="Weight Loss"
            onChange={onChangeHandler}
            checked={formData.weightLoss === "Weight Loss"}
            id="weight-loss"
          /> Weight Loss
          </label>
          <br />
          <label htmlFor="extreme-loss">
          <input
            type="radio"
            name="weightLoss"
            value="Extreme Weight Loss"
            onChange={onChangeHandler}
            checked={formData.weightLoss === "Extreme Weight Loss"}
            id="extreme-loss"
          /> Extreme Weight Loss
          </label>
        </label>
       <br />
       <button className='nutrition-submit-button' type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
     </form>
   </div>
   </div>
  )
}
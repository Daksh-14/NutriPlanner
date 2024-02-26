import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";


export const Features = () => {
  return (
    <div>
      <h1>Features</h1>
      <NavLink to='/features/foodrecipe'>
        Food-Recipe
      </NavLink>
      <br />
      <NavLink to='/features/nutrition'>
        Nutrition
      </NavLink>
      <br />
      <NavLink to='/features/chatbot'>
        ChatBot
      </NavLink>
      <br />
      <NavLink to='/features/photoinfo'>
        Food Recognition
      </NavLink>
      <br />
    </div>
  )
}


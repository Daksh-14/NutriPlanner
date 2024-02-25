import React from 'react';
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Price } from './pages/Price';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Features } from './pages/Features/Features';
import { FoodRecipe } from './pages/Features/FoodRecipe';
import { Nutrition } from './pages/Features/Nutrition';
import { PhotoInfo } from './pages/Features/PhotoInfo';
import { Chatbot } from './pages/Features/Chatbot';
import { useState } from 'react';

export const App =()=>{
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' 
    element={<Layout 
      isAuthenticated={isAuthenticated} 
      setIsAuthenticated={setIsAuthenticated}
    />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/price' element={<Price />} />
      
      {isAuthenticated ? (
        <>
          <Route path='/features' element={<Features/>} />
          <Route path='/features/foodrecipe' element={<FoodRecipe/>}/>
          <Route path='/features/nutrition' element={<Nutrition/>}/>
          <Route path='/features/chatbot' element={<Chatbot />}/>
          <Route path='features/photoinfo' element={<PhotoInfo />}/>
        </>
      ) : (
        <>
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path='/signup' element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        </>
      )}
    </Route>
  ));

  return(
    <RouterProvider router={router} />
  )
}


import React from 'react'
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';


export const Layout = ({isAuthenticated,setIsAuthenticated}) => {
  return (
    <div>
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
            <Outlet />
        <Footer />
    </div>
  )
}

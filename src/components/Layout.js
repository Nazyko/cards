import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./style.css"

const Layout = () => {
  return (
    <div>
        <header className='header'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        </header>

        <Outlet />
        
    </div>
  )
}

export default Layout

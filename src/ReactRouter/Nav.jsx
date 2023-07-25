import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    < div className='nav'>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/home" >Home</NavLink>
      <NavLink to="/about" >About</NavLink>
      <NavLink to="/contact" >Contact</NavLink>
    </div>
  )
}

export default Nav

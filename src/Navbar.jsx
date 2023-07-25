import React from 'react'

import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink to="accordion">Accordion</NavLink>
      <NavLink to="api1">Api-1</NavLink>
      <NavLink to="apihw">Apihw</NavLink>
      <NavLink to='ass'>Ass</NavLink>
      <NavLink to="cal">Calculator</NavLink>
      <NavLink to="app2">Components</NavLink>
      <NavLink to="form">Form</NavLink>
      <NavLink to="lifecycle">LCM</NavLink>
      <NavLink to="propsdrilling">PropsDrilling</NavLink>
      <NavLink to="mui">Mui</NavLink>
      <NavLink to="redux">Redux</NavLink>
      <NavLink to="incdec">Inc-Dec</NavLink>
      <NavLink to="toggle">ToggleText</NavLink>
      <NavLink to="todo">Todo</NavLink>
      <NavLink to="todoedit">TodoEdit</NavLink>
      <NavLink to="usecallback">UseCallback</NavLink>
      <NavLink to="useCtxt">UseContext</NavLink>
      <NavLink to="useeft">UseEft-fakeapp</NavLink>
      <NavLink to="effect" >Effect</NavLink>
      <NavLink to="usememo">UseMemo</NavLink>
      <NavLink to="useredure">UseRedure</NavLink>
      <NavLink to="useref">UseRef</NavLink>
    </div>
  )
}

export default Navbar

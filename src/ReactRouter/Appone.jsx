import React from 'react'
import Nav from './Nav'
import { Routes, Route } from "react-router-dom";
import Main from './Main';
import Home from './Home'
import About from './About';
import Contact from './Contact'

const Appone = () => {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default Appone

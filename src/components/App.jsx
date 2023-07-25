import React from 'react'
import Gellary from './Gellary'

const App = () => {
  return (
    <>
      <ul className='nav'>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Product</li>
        <li>Contact</li>
      </ul>
      <div className='gel'>
        <Gellary image="/image/1.jpg" name="Quit1" />
        <Gellary image="/image/2.jpg" name="Quit2" />
        <Gellary image="image/3.jpg" name="Quit3" />
        <Gellary image="image/4.jpg" name="Quit4" />
      </div>

    </>
  )
}

export default App

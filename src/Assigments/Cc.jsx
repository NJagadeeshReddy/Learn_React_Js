import React from 'react'
import Apicarona from './Apicarona'
import ApiCaronatable from './ApiCaronatable'
import ApiSuperHero from './ApiSuperHero'
import SuperTable from './SuperTable'
import "./api.css"

const Cc = () => {
  function myfun(number) {
    if (number >= 0 && number <= 100) {
      let c = number % 2 === 0 ? "green" : "red"
      return c
    }
  }
  let color = myfun(6)
  return (
    <>
      <h1 className='hint'>Ass.. Color on even and odd</h1>
      <div style={{ backgroundColor: color, width: "600px", height: "50px" }}> jaga</div>
      <h2 className='heading'> Assigments</h2>
      <div>

        <Apicarona />
        <h4 className='heading'>Api Carona table</h4>
        <ApiCaronatable />
        <h4 className='heading'>Api Super Heros table</h4>
        <SuperTable />
        <h4 className='heading'>Api Super heros list </h4>
        <ApiSuperHero />

      </div>
    </>
  )
}

export default Cc

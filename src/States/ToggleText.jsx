import React, { useState } from 'react'

const ToggleText = () => {
  let [state, setState] = useState(true)
   let [state1 ,setState1]= useState(true)
  console.log(state)
  console.log(setState)
  function handleClick() {
    setState(!state)
  }
   let para= <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus rem itaque assumenda. Libero dicta id excepturi ullam quasi autem dolor est nisi exercitationem unde doloremque temporibus commodi veniam, harum sint.</p>
    let handleClick1=()=>{
        setState(!state)
    }

  return (
    <div>
      <h1 className='hint'>toggle Text</h1>
      <h2 style={{ marginLeft: "40%", padding: "10px" }}>Click here</h2>
      <button onClick={handleClick} style={{ marginLeft: "45%", padding: "10px" }}>{state ? "ON" : "OFF"}</button>
      <div>
          {
            state?para:""
        }
        <button className="bn" onClick={handleClick}>{state?"hide":"show"}</button></div>
    </div>
  )
}

export default ToggleText

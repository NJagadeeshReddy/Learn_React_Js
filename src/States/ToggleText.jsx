import React, { useState } from 'react'

const ToggleText = () => {
  let [state, setState] = useState(true)
  console.log(state)
  console.log(setState)
  function handleClick() {
    setState(!state)
  }

  return (
    <div>
      <h1 className='hint'>toggle Text</h1>
      <h2 style={{ marginLeft: "40%", padding: "10px" }}>Click here</h2>
      <button onClick={handleClick} style={{ marginLeft: "45%", padding: "10px" }}>{state ? "ON" : "OFF"}</button>
    </div>
  )
}

export default ToggleText

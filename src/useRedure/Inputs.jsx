import React, { useState } from 'react'

const Inputs = () => {

  let [state, setState] = useState("")
  let fname = (e) => {
    setState(e.target.value)
    console.log(state)
  }
  return (
    <div>
      <h1>Input values : {state}</h1>
      <form action="">
        <input value={state} type='text' onChange={fname} /> <br />
        <input value={state} type='text' onChange={fname} /><br />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Inputs

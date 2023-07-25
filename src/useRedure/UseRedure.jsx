import React, { useReducer } from 'react'
import Inputs from './Inputs';
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + 1
    case "dec":
      return state - 1;
    default:
      throw new Error()
  }
}
const UseRedure = () => {
  let [state, dispatch] = useReducer(reducer, 0)
  console.log(state, dispatch)
  return (
    <>
      <div>
        <h1 className='hint'>useRedure</h1>
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
        <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
      </div>
      <h1 className='hint'>Forms</h1>
      <div> <Inputs /> </div>
    </>
  )
}

export default UseRedure

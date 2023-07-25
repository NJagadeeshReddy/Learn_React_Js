// import React, { useState } from 'react'

// const abc = () => {
//     let [count ,setCount]=useState(0)
//     let [bool ,setBool]=useState(true)
//     let handle =()=>{
//         setBool(!bool)
//         setCount(state+1)
//     }
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handle}>{bool?"increment":"clicked"}</button>
//       <button>decrement</button>
//     </div>
//   )
// }

// export default abc

import React, { useReducer } from 'react'

const Abc = () => {
  let [state, dispatch] = useReducer(reducer, { count: 0, bool: true })
  function reducer(state, action) {
    switch (action.type) {
      case "incr": return { count: state.count + 1, bool: !state.bool }
      case "decr": return { count: state.count - 1, bool: state.bool }
      default:
    }
  }
  return (
    <div>
      <h1 className='hint'>Incement and Decrement using Redux</h1>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "incr" })}>{state.bool ? "increment" : "clicked"}</button>
      <button onClick={() => dispatch({ type: "decr" })}>decrement</button>

    </div>
  )
}

export default Abc


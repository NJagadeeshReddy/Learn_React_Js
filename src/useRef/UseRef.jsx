import { useEffect, useRef, useState } from "react"
import React from 'react'
// useRef() 

const UseRef = () => {
  let [state, setState] = useState("")
  let count = useRef(0) // useRef () will return the object {} 
  console.log("re-render")
  useEffect(() => {
    count.current = count.current + 1
  })
  let init = useRef()
  let changleStyle = () => {
    init.current.style.backgroundColor = "red"
    init.current.focus()
  }

  return (
    <div>
      <h1 className="hint">useRef</h1>
      <p onDoubleClick={() => init.current.style.backgroundColor = "green"} ref={init}>hello world ....Change color</p>
      <h1>Component rendered {count.current} times</h1>
      <input type="text" placeholder="enter sometheing"
        onChange={(e) => setState(e.target.value)}
        value={state} />
      <br /><br />
      <input type="text" ref={init} />
      <button onClick={changleStyle}>Change</button>
    </div>
  )
}

export default UseRef

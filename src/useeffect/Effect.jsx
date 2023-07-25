import React, { useEffect, useState } from 'react'

const Effect = () => {
  let [state, setState] = useState(0)
  console.log("re-render")
  useEffect(() => {
    document.title = "you clicked" + state + "times"
  }, [state])

  const func = () => {
    setState(state + 1)
  }

  return (
    <div>
      <h2 className='hint'> how to use useEffect </h2>
      <h3 onClick={func}>{state}</h3>
      <h4 >jagadesh</h4>
    </div>
  )
}

export default Effect

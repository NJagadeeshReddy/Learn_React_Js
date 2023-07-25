import React, { useState } from 'react'

const IncDec = () => {
  let [count, setCount] = useState(0)
  function add() {
    setCount(count + 1)
  }
  function remove() {
    if (count > 0)
      setCount(count - 1)
    else
      alert("no more")
  }
  return (
    <div>
      <h1 className='hint'> Increment and decrement</h1>
      <div>add to cart<sup>{count}</sup> </div>
      <button onClick={add} >Add to cart</button>
      <button onClick={remove}>Remove from cart</button>
    </div>
  )
}

export default IncDec

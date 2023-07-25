import React from 'react'

let myname = "jagadesh"
let ti = "React jsx file"
let para = <p>bjsaiuha oewai iuweiupwe iuwqhwei</p>
let c = { color: "red", backgroudColor: "red" }

const Jsx = () => {
  return (
    <>
      {para}
      <h1>my name is {myname}</h1>
      <h1>i have {5 + 5} rupees</h1>
      <h1 title={ti}>we are learning</h1>
      <button style={c}>Join react</button>
    </>
  )
}

export default Jsx

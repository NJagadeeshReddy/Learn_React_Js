import React, { useState } from 'react'

const Form = () => {
  let [state, setState] = useState("")
  let [state1, setState1] = useState("")
  let getfname = (event) => {
    setState(event.target.value)
    console.log(state)
  }
  let getlame = (event) => {
    setState1(event.target.value)
    console.log(state1)
  }

  return (
    <div>
      <h1>welcome user : {state} {state1}</h1>
      <form action="">
        <input value={state} type="text" onChange={getfname} /> <br />
        <input value={state1} type="text" onChange={getlame} /> <br />
        <button type='submit'>submit</button>
      </form>
      <div>
        <FormsOnSubmit />
      </div>
    </div>
  )
}

export default Form


export const FormsOnSubmit = () => {
  let [state, setState] = useState({ user: "", pass: "" })
  let [state1, setState1] = useState({ usernew: "", passnew: "" })


  let handleInput = (e) => {
    //let value= e.target.value
    //let name=e.target.name
    let { value, name } = e.target;
    setState((preVal) => {
      // if (name==="username"){
      //     return{user:value ,pass:preVal.pass}
      // }else if (name==="password"){
      //     return{user:preVal.user ,pass:value}
      // }
      switch (name) {
        case "username": return { user: value, pass: preVal.pass }
        case "password": return { user: preVal.user, pass: value }
        default: return state
      }
    })
  }
  let handleSubmit = (e) => {
    setState1({ usernew: state.user, passnew: state.pass })
    setState({ user: "", pass: "" })
    e.preventDefault()
  }


  return (
    <div>
      <h1>username is :{state1.usernew}</h1>
      <h1>password is :{state1.passnew}</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          className='input-form2'
          value={state.user}
          onChange={handleInput}
          type="text"
          name="username"
          placeholder="enter your name"
        />
        <input
          className='input-form2'
          value={state.pass}
          onChange={handleInput}
          type="password"
          name="password"
          placeholder="enter your password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>

  )

}



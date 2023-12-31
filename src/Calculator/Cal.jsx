import React, { useState } from 'react'
import "./App.css"
const Cal = () => {
    const [result, setResult] = useState("Hi")
    const clearAll = () => {
        setResult("")
    }
    const clearone = () => {
        setResult(result.slice(0, -1))
    }
    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }
    const calculate = () => {
        setResult(eval(result))
    }
    return (
        <div className='container'>
            <input type="text" value={result} />
            <div className='keypad'>
                <button id='clearAll' onClick={clearAll}>Ce</button>
                <button name="" onClick={clearone}  >C</button>
                <button name="/" onClick={handleClick} >/</button>
                <button name="7" onClick={handleClick} >7</button>
                <button name="8" onClick={handleClick} >8</button>
                <button name="9" onClick={handleClick} >9</button>
                <button name="*" onClick={handleClick} >*</button>
                <button name="4" onClick={handleClick} >4</button>
                <button name="5" onClick={handleClick} >5</button>
                <button name="6" onClick={handleClick} >6</button>
                <button name="+" onClick={handleClick} >+</button>
                <button name="1" onClick={handleClick} >1</button>
                <button name="2" onClick={handleClick} >2</button>
                <button name="3" onClick={handleClick} >3</button>
                <button name="-" onClick={handleClick} >-</button>
                <button name="0" onClick={handleClick} >0</button>
                <button name="." onClick={handleClick} >.</button>
                <button id='result' name="=" onClick={calculate} >=</button>
            </div>

        </div>
    )
}

export default Cal

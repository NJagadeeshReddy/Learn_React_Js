import React, { useState } from 'react'
import Todolist from './TodoIist'
const Todo = () => {
    let [todo, setTodo] = useState("")
    let [item, setItem] = useState([])
    let handeleSubmit = (e) => {

        setItem((preVal) => {
            return [...preVal, todo]
        })
        setTodo("")
    }
    let getInputVal = (e) => {
        setTodo(e.target.value)
    }

    return (
        <div>
            <h1 className='hint'>Todo list</h1>
            <div className="todohead">
                <form action="" >
                    <input className="todo-input" type="text" onChange={getInputVal} value={todo} />
                    <button type='button' className='btn btn' onClick={() => handeleSubmit()}>Add TODO</button>
                </form>
            </div>

            {item.map((item, i) => {
                return <Todolist
                    key={i + 1}
                    item={item}
                    i={i}
                    setItem={setItem}
                />
            })
            }

        </div>
    )
}

export default Todo

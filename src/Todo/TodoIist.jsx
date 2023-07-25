
import React from 'react'

const Todolist = ({ item, i, setItem }) => {
  let handleDelete = (i) => {
    setItem((preVal) => {
      return preVal.filter((elem, index) => {
        return index !== i
      })
    })
  }
  return (
    <div className="d-flex flex-column align-items-center">
      <div className='todo-list'>
        <p style={{ listStyle: "none" }}>{i + 1}. {item}</p>
        <button className='d' onClick={() => { handleDelete(i) }}>Delete</button>
        <button className='e'>Edit</button>
      </div>
    </div>
  )
}

export default Todolist

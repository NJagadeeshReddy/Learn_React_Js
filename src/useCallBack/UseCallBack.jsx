// The useCallback hook is used to memoize a function, 
// similar to useMemo, but specifically designed for functions. 
// It helps prevent unnecessary re-creation of functions, 
// which can be beneficial when passing callbacks as props to child components, 
// as it ensures child components don't unnecessarily re-render.
import React, { useState, useCallback } from 'react';

const UseCallBack = () => {
    const [count, setCount] = useState(0);

    // Define a function that will be memoized using useCallback
    const handleIncrement = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []); // Empty dependency array means the function is created once and never re-created.

    return (
        <>
            <div>
                <h1 className='hint'>useCallback Hook Example</h1>
                <p>Count: {count}</p>
                {/* We pass the memoized function as a callback to the button onClick */}
                <button onClick={handleIncrement}>Increment Count</button>
            </div>
            <div>
                <TodoList />
            </div>
        </>
    );
};

export default UseCallBack;




const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    // Add a new todo item to the list
    const addTodo = useCallback(() => {
        if (newTodo.trim() !== '') {
            if (editIndex === -1) {
                // Adding a new todo
                setTodos(prevTodos => [...prevTodos, newTodo]);
            } else {
                // Editing an existing todo
                setTodos(prevTodos => {
                    const updatedTodos = [...prevTodos];
                    updatedTodos[editIndex] = newTodo;
                    return updatedTodos;
                });
                setEditIndex(-1); // Reset editIndex after edit
            }
            setNewTodo('');
        }
    }, [newTodo, editIndex]);

    // Remove a todo item from the list
    const removeTodo = useCallback((index) => {
        setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
    }, []);

    // Edit a todo item
    const editTodo = useCallback((index) => {
        setEditIndex(index);
        setNewTodo(todos[index]);
    }, [todos]);

    return (
        <div>
            <h1 className='hint'>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter new todo"
            />
            <button onClick={addTodo}>
                {editIndex === -1 ? 'Add Todo' : 'Save Edit'}
            </button>
            <ul className='todo-ul'>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {index + 1}. {todo}{' '}
                        <button className='d' onClick={() => removeTodo(index)}>Remove</button>{' '}
                        <button className='e' onClick={() => editTodo(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};





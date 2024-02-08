/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react'

const InputBox = ({newTask}) => {
    const [task, setTask] = useState('');
    
    const handleInput = () => {
        setTask(event.target.value);
    }

    const handleNewTask = (event) => {
        event.preventDefault();
        if (task.trim() === '') {
            return;
        }
        newTask(task);
        setTask('');
    }
    
    return (
        <form className="textField" onSubmit={handleNewTask}>
            <input type="text" 
                placeholder='Enter task...' 
                value={task}
                onChange={handleInput}
                onFocus={handleInput}
            />
            <button>+</button>
        </form>
    )
}

export default InputBox;
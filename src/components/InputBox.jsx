/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react'

const InputBox = ({newTask, editTask, updateTask}) => {
    const [task, setTask] = useState('');
    
    const handleInput = (event) => {
        setTask(event.target.value);
    }

    const handleNewTask = (event) => {
        event.preventDefault();
        if (task.trim() === '') {
            return;
        }
        if (editTask) {
            updateTask(task, editTask.id)
        } else { 
            newTask(task);
        }
        setTask('');
    }

    useEffect(()=>{
        if (editTask){
            setTask(editTask.name)
        }
    }, [editTask])
    
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
import React from 'react';
import {MdDelete, MdEdit} from 'react-icons/md';

const Items = ({ task, deleteTask, checkTask, editTask}) => {
  return (
    <li className={task.isCheck ? 'isCheckedInput' : 'items'}>
        <div className="items-text">
            <input 
                type="checkbox" 
                checked={task.isCheck}
                onChange={() => checkTask(task.name)}
            />
            <p className={task.isCheck ? 'isChecked' : 'task-name'}>{task.name}</p>
        </div>
        <MdEdit 
          className="edit-icon"
          onClick={() => editTask(task.id)}
        />
        <MdDelete className="delete-icon"
            onClick={() => deleteTask(task.name)}
        />
    </li>
  )
}

export default Items;
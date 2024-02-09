/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import InputBox from "./components/InputBox";
import { useState } from 'react'
import Items from "./components/Items";
import CountItem from "./components/CountItem";

const App = () => {
  const [toDoList, setTodo] = useState([]);

  // add new task
  const newTask = (name) => {
    const newTask = {
      name,
      id: Date.now(),
      isCheck: false,
      isEdit: false
    };
    setTodo([...toDoList, newTask]);
  }
  
  // delete task
  const deteleTask = (deleteTaskName) => {
    setTodo(toDoList.filter((task) => task.name !== deleteTaskName));
  }

  //togglecheck complete task
  const checkTask = (taskName) => {
    setTodo((prev) => prev.map((task) => 
      task.name === taskName ? {...task,
      isCheck: !task.isCheck } : task,
    ))
  }

  //handle edit task
  const editTask = (name) => {
    const editTask = toDoList.map((item) => item.name === name ? {...toDoList, isEdit: !toDoList.isEdit} : toDoList);
    setTodo(editTask);
  }

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <InputBox newTask={newTask}/>
        <div className="toDoList">
          <span>List tasks</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <Items 
                task={task} 
                key={key}
                deleteTask={deteleTask}
                editTask={editTask}
                checkTask={checkTask}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? (
            <p className="notify">Don't have any task!</p>
          ) : null}
        </div>
      </div>
      <CountItem todoList={toDoList}/>
    </>
  );
}

export default App;

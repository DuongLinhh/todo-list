/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import InputBox from "./components/InputBox";
import { useState } from 'react'
import Items from "./components/Items";
import CountItem from "./components/CountItem";

const App = () => {
  const [toDoList, setTodo] = useState([]);
  const [edit, setEdit] = useState();

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

  // update new task
  const updateTask = (name, id) => {
    const i = toDoList.findIndex((item) => item.id === id);
    if (i !== -1 ) {
      toDoList[i].name = name;
      setTodo([...toDoList]);
      setEdit(null);
    }
  }

  
  // delete task
  const deteleTask = (deleteTaskId) => {
    setTodo(toDoList.filter((task) => task.id !== deleteTaskId));
    setEdit(null);
  }

  //togglecheck complete task
  const checkTask = (taskId) => {
    setTodo((prev) => prev.map((task) => 
      task.id === taskId ? {...task,
      isCheck: !task.isCheck } : task,
    ))
  }

  //handle edit task
  const editTask = (id) => {
    const editTask = toDoList.find((item) => item.id === id);
    setEdit(editTask);
  }

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <InputBox newTask={newTask} editTask={edit}
                updateTask={updateTask}
        />
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

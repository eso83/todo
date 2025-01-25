import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
      if(task===''){alert("please add your task")}
      else{setTaskList([...taskList, task]);
        setTask("");}
      
  };

  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <input
          type="text"
          placeholder="add your task"
          value={task}
          onChange={handleTask}
        />
        <button onClick={handleAddTask}>Add</button>
        <div className="todoList">
          <ul>
            {taskList.length === 0 ? (
              "addTask"
            ) : (
              taskList.map((item, index) => <li key={index}><input type="checkbox" value="" />{item}</li> )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;

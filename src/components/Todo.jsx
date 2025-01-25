import React, { useState, useEffect } from "react";

const Todo = () => {
  const [task, setTask] = useState({ task: "", status: false });
  const [taskList, setTaskList] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleTask = (e) => {
    setTask({ ...task, task: e.target.value });
  };

  const handleAddTask = () => {
    if (task.task === "") {
      alert("please add your task");
    } else {
      setTaskList([...taskList, task]);
      setTask({ task: "", status: false });
    }
  };
  const handleStatus = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].status = !newTaskList[index].status;
    setTaskList(newTaskList);
  };
  const handleDelete = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };
  const handleEdite = (index) => {
    setEditIndex(index);
    setEditTask(taskList[index].task);
  };
  const handelSaveTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].task = editTask;
    setTaskList(newTaskList);
    setEditIndex(null);
  };

  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <input
          type="text"
          placeholder="add your task"
          value={task.task}
          onChange={handleTask}
        />
        <button onClick={handleAddTask}>Add</button>
        <div className="todoList">
          <ul>
            {taskList.length === 0
              ? "addTask"
              : taskList.map((item, index) => (
                  <div className="taskContainer" key={index}>
                    <p>task:</p>
                    <li>
                      {editIndex === index ? (
                        <input
                          className="editInput"
                          type="text"
                          value={editTask}
                          onChange={(e) => setEditTask(e.target.value)}
                        />
                      ) : (
                        item.task
                      )}
                    </li>
                    <input
                      className="checkBox"
                      type="checkbox"
                      onChange={() => handleStatus(index)}
                      checked={item.status}
                    />
                    <button
                      onClick={() => handleDelete(index)}
                      className="deleteBtn"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        editIndex === index
                          ? handelSaveTask(index)
                          : handleEdite(index)
                      }
                      className="editBtn"
                    >
                      {editIndex === index ? "Save" : "Edit"}
                    </button>
                  </div>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;

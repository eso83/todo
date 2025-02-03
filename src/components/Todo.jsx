import React, { useState, useEffect, createContext, useContext } from "react";
import Task from "./Task";
import Input from "./Input";
import { logInContext } from "../App";

export const taskContext = createContext();
const Todo = () => {
  const logIn = useContext(logInContext);
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
  const handleLogout = () => {
    logIn.setIsLogIn(false);
    logIn.setIsLogIn(false);
  };

  return (
    <>
      <div className="container">
        <taskContext.Provider value={{ task, handleTask, handleAddTask }}>
          <Input />
        </taskContext.Provider>
        <div className="todoList">
          <ul>
            {taskList.length === 0 ? (
              "addTask"
            ) : (
              <taskContext.Provider
                value={{
                  taskList,
                  editIndex,
                  setEditTask,
                  editTask,
                  handleStatus,
                  handleDelete,
                  handelSaveTask,
                  handleEdite,
                }}
              >
                <Task />
              </taskContext.Provider>
            )}
          </ul>
        </div>
      </div>
      <button onClick={handleLogout} className="logout">
        Logout
      </button>
    </>
  );
};

export default Todo;

// TodoContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

export const taskContext = createContext();

const AppProvider = ({ children, logInStatus }) => {
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
  const isLogIn = logInStatus.isLogIn;
  const setIsLogIn = logInStatus.setIsLogIn;
  const [profileInfo, setProfileInfo] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfileInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogIn = () => {
    if (profileInfo.password === "admin" && profileInfo.username === "admin") {
      setIsLogIn(true);
    } else {
      alert("userName or Password is incorrect!");
    }
  };
  const handleLogOut = () => {
    setIsLogIn(!isLogIn);
  };

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

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTask(taskList[index].task);
  };

  const handleSaveTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].task = editTask;
    setTaskList(newTaskList);
    setEditIndex(null);
  };

  return (
    <taskContext.Provider
      value={{
        taskList,
        editIndex,
        setEditTask,
        editTask,
        handleStatus,
        handleDelete,
        handleSaveTask,
        handleEdit,
        task,
        handleTask,
        handleAddTask,
        handleChange,
        handleLogIn,
        handleLogOut,
      }}
    >
      {children}
    </taskContext.Provider>
  );
};

export default AppProvider;

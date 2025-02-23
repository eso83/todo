import React, { useContext } from "react";
import Task from "../components/Task";
import Input from "../components/Input";
import { taskContext } from "../context/AppContext";

const Todo = () => {
  const logIn = useContext(taskContext);
  return (
    <>
      <div className="container">
        <Input />
        <div className="todoList">
          <ul>
            <Task />
          </ul>
        </div>
      </div>
      <button onClick={logIn.handleLogOut} className="logout">
        Logout
      </button>
    </>
  );
};

export default Todo;

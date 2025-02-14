import React, { useState, useEffect, createContext, useContext } from "react";
import Task from "../components/Task";
import Input from "../components/Input";
import TodoListProvider, { taskContext } from "../context/TodoContext";
import { logInContext } from "../App";

const Todo = () => {
  return (
    <>
      <TodoListProvider>
        <div className="container">
          <Input />

          <div className="todoList">
            <ul>
              <Task />
            </ul>
          </div>
        </div>
        {/* <button onClick={handleLogout} className="logout">
          Logout
        </button> */}
      </TodoListProvider>
    </>
  );
};

export default Todo;

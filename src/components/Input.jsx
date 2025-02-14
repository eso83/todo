import { useContext } from "react";
import { taskContext } from "../context/TodoContext";
const Input = () => {
  const { task, handleTask, handleAddTask } = useContext(taskContext);
  return (
    <>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="add your task"
        value={task.task}
        onChange={handleTask}
      />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
};
export default Input;

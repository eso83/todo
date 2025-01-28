import { useContext } from "react";
import { taskContext } from "./todo";
const Input = () => {
  const input = useContext(taskContext);
  return (
    <>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="add your task"
        value={input.task.task}
        onChange={input.handleTask}
      />
      <button onClick={input.handleAddTask}>Add</button>
    </>
  );
};
export default Input;

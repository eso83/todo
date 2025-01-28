import { useContext } from "react";
import { taskContext } from "./todo";
const Task = () => {
  const task = useContext(taskContext);
  return (
    <>
      {task.taskList.map((item, index) => (
        <div className="taskContainer" key={index}>
          <p>task:</p>
          <li>
            {task.editIndex === index ? (
              <input
                className="editInput"
                type="text"
                value={task.editTask}
                onChange={(e) => task.setEditTask(e.target.value)}
              />
            ) : (
              item.task
            )}
          </li>
          <input
            className="checkBox"
            type="checkbox"
            onChange={() => task.handleStatus(index)}
            checked={item.status}
          />
          <button
            onClick={() => task.handleDelete(index)}
            className="deleteBtn"
          >
            Delete
          </button>
          <button
            onClick={() =>
              task.editIndex === index
                ? task.handelSaveTask(index)
                : task.handleEdite(index)
            }
            className="editBtn"
          >
            {task.editIndex === index ? "Save" : "Edit"}
          </button>
        </div>
      ))}
    </>
  );
};
export default Task;

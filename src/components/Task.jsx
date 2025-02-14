import { useContext } from "react";
import { taskContext } from "../context/TodoContext";
import { v4 as uuidv4 } from "uuid";
const Task = () => {
  const {
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
    handleLogout,
  } = useContext(taskContext);
  return (
    <>
      {taskList.map((item, index) => {
        const uid = uuidv4();
        return (
          <div className="taskContainer" key={uid}>
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
            <button onClick={() => handleDelete(index)} className="deleteBtn">
              Delete
            </button>
            <button
              onClick={() =>
                editIndex === index ? handleSaveTask(index) : handleEdit(index)
              }
              className="editBtn"
            >
              {editIndex === index ? "Save" : "Edit"}
            </button>
          </div>
        );
      })}
    </>
  );
};
export default Task;

import { useContext } from "react";
import { taskContext } from "../context/AppContext";
const LogInPage = () => {
  const { handleChange, handleLogIn } = useContext(taskContext);
  return (
    <>
      <div className="container">
        <h1>LogIn</h1>
        <input
          type="text"
          placeholder="Enter username..."
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter passweord..."
          name="password"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleLogIn}>LogIn</button>
      </div>
    </>
  );
};
export default LogInPage;

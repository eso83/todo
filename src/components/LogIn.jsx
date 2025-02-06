import { useState, useContext } from "react";
import { logInContext } from "../App";
const LogIn = () => {
  const logIn = useContext(logInContext);
  const [profileInfo, setProfileInfo] = useState({
    username: "",
    password: "",
  });
  const handleUserName = (e) => {
    profileInfo.userName = e.target.value;
  };
  const handlePassWord = (e) => {
    profileInfo.passWord = e.target.value;
  };
  const handleLogIn = () => {
    if (profileInfo.password === "admin" && profileInfo.username === "admin") {
      logIn.setIsLogIn(true);
    } else {
      alert("userName or Password is incorrect!");
    }
  };
  return (
    <>
      <div className="container">
        <h1>LogIn</h1>
        <input type="text" placeholder="Enter userName..." />
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
export default LogIn;

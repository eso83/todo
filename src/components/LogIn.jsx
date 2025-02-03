import { useState, useContext } from "react";
import { logInContext } from "../App";
const LogIn = () => {
  const logIn = useContext(logInContext);
  const [profileInfo, setProfileInfo] = useState({
    userName: "",
    passWord: "",
  });
  const handleUserName = (e) => {
    profileInfo.userName = e.target.value;
  };
  const handlePassWord = (e) => {
    profileInfo.passWord = e.target.value;
  };
  const handleLogIn = () => {
    if (profileInfo.passWord === "admin" && profileInfo.userName === "admin") {
      logIn.setIsLogIn(true);
    } else {
      alert("userName or Password is incorrect!");
    }
  };
  return (
    <>
      <div className="container">
        <h1>LogIn</h1>
        <input
          onChange={handleUserName}
          type="text"
          placeholder="Enter userName..."
        />
        <input
          onChange={handlePassWord}
          type="password"
          placeholder="Enter passWord..."
        />
        <br />
        <button onClick={handleLogIn}>LogIn</button>
      </div>
    </>
  );
};
export default LogIn;

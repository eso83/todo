import Todo from "./components/todo";
import LogIn from "./components/LogIn";
import { createContext, useEffect, useState } from "react";
export const logInContext = createContext();
const App = () => {
  const [isLogIn, setIsLogIn] = useState(() => {
    const logIn = localStorage.getItem("isLogIn");
    return logIn ? JSON.parse(logIn) : false;
  });
  useEffect(() => {
    localStorage.setItem("isLogIn", JSON.stringify(isLogIn));
  }, [isLogIn]);
  return (
    <>
      <logInContext.Provider value={{ isLogIn, setIsLogIn }}>
        {isLogIn === true ? <Todo /> : <LogIn />}
      </logInContext.Provider>
    </>
  );
};

export default App;

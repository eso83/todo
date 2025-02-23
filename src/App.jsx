import Todo from "./pages/TodoPage";
import AppProvider from "./context/AppContext";
import LogInPage from "./pages/LogInPage";
import { useEffect, useState } from "react";
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
      <AppProvider logInStatus={{ isLogIn, setIsLogIn }}>
        {isLogIn ? <Todo /> : <LogInPage />}
      </AppProvider>
    </>
  );
};
// app provider nadare baiad dorost she
export default App;

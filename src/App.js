import { useState } from "react";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const loginAuth = (value) => {
    setIsLogin(value);
  };

  if (isLogin) {
    return (
      <>
        <Navbar logout={loginAuth} />
      </>
    );
  } else {
    return (
      <>
        <Login login={loginAuth} />
      </>
    );
  }
};

export default App;

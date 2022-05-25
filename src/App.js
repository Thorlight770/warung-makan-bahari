import { useState } from "react";
import { data } from "./dashboard/Dashboard";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [menu, setMenu] = useState(
    [
      {
        id : "mid-0001",
        name : "bakso",
        price : 12000,
      },
      {
        id : "mid-0002",
        name : "soto",
        price : 10000,
      },
      {
        id : "mid-0003",
        name : "ketoprak",
        price : 11000,
      },
      
    ]
  );
  const [table, setTable] = useState(
    [
      {
        id : "tid-0001",
        number : "01",
        status : "Available",
      },
      {
        id : "tid-0002",
        number : "02",
        status : "Unavailable",
      },
      {
        id : "tid-0003",
        number : "03",
        status : "Available",
      },
      
    ]
  )

  const addDataMenu = (data) => {
    console.log(data);
    setMenu([...menu, data])
  }

  const deleteDataMenu = (index) => {
    let list = menu;
    list.splice(index, 1);
    setMenu([...menu],list);
  }

  const updateDataMenu = (data) => {
    let list = menu;
    list.splice(data.key, 0 , data.payload)
    setMenu([...menu],list);
  }

  const addDataTable = (action) => {
    setTable(...table, action.payload)
  }

  const loginAuth = (value) => {
    setIsLogin(value);
  };

  if (isLogin) {
    return (
      <>
        <Navbar 
        logout={loginAuth} 
        menu={menu} 
        addDataMenu={addDataMenu}
        deleteDataMenu={deleteDataMenu}
        updateDataMenu={updateDataMenu}
        table={table} 
        addDataTable={addDataTable}
        />
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

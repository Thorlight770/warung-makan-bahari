import "animate.css";
import { useState } from "react";
import FormMenu from "./FormMenu";
import MenuList from "./MenuList";

const Menu = (props) => {
  const { menu, addDataMenu, updateDataMenu, deleteDataMenu } = props;
  const [status, setStatus] = useState(); 
  
  const handleAddForm = (value) => {
    console.log(value);
    setStatus(value);
  }

  let page = '';
  if(status === "addData"){
    page = <FormMenu status={handleAddForm} addDataMenu={addDataMenu} updateDataMenu={updateDataMenu}/>
  }else if(status === "updateData"){
    page = <FormMenu status={handleAddForm}/>
  }else{
    page = <MenuList menu={menu} status={handleAddForm} deleteDataMenu={deleteDataMenu}/>
  }
  return (
    <>
      <div className="header d-flex justify-content-between">
        <h1>Menu</h1>
        <form className="d-flex align-items-center">
          <i className="bi bi-bell mx-3"></i>
          <input className="search form-control" placeholder="Search"></input>
        </form>
      </div>
      <hr />
      {page}
    </>
  );
};

export default Menu;

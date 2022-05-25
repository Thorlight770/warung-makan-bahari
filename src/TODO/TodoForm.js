import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ActionType from "./ActionType";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    todo : "",
    desc : ""
  })

  const handleChangeTodo = (e) => {
    setState({...state, todo : e.target.value})
  }
  
  const handleChangeDesc = (e) => {
    setState({...state, desc : e.target.value})
  }

  const handleSubmit = (e) => {
    dispatch({type : ActionType.ADD, payload : state, data : false});
    e.preventDefault();
  }
  return (
    <div>
      <h1>TodoForm</h1>
      <button
        onClick={() =>
          dispatch({ type: ActionType.SET_COMPONENT, data: false })
        }
      >
        CANCLE
      </button>
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
        <label>TODO</label>
        <input type="text" name="todo" onChange={handleChangeTodo}/>
        <label>DESCRIPTION</label>
        <input type="text" name="desc" onChange={handleChangeDesc}/>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default TodoForm;

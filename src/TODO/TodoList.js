import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionType from "./ActionType";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h1>TodoList</h1> <br />
      <hr />
      <button
        onClick={() => dispatch({ type: ActionType.SET_COMPONENT, data: true })}
      >
        ADD TODO
      </button>{" "}
      <br />
      <hr />
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>TODO</td>
            <td>DESCRIPTION</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((data, i) => {
            return (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{data.todo}</td>
                <td>{data.desc}</td>
                <td>
                  <button>FINISH</button>
                  <button>EDIT</button>
                  <button>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;

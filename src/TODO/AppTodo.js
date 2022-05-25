import React from 'react'
import { useSelector } from 'react-redux'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const AppTodo = () => {
    const addedForm = useSelector((state) => state.addedForm)
  return (
    <>
    {addedForm ? <TodoForm/> : <TodoList/>}
    </>
  )
}

export default AppTodo;

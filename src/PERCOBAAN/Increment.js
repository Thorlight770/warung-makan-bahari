import React, { useContext } from 'react'
import ActionType from './ActionType'
import { RootContext } from './AppCoba'

export const Increment = () => {
    const data = useContext(RootContext);
  return (
    <>
    <h1>{data.value.number}</h1>
    <button onClick={() => data.dispatch({type : ActionType.PLUS})}>+</button>
    </>
  )
}

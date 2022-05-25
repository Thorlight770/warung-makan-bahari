import React from 'react'
import { useDispatch } from 'react-redux'
import ActionType from './ActionType'

export const Increment = () => {
    const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch({type : ActionType.PLUS})}>-</button>
  )
}

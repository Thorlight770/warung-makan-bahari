import React, { Component } from 'react'
import { RootContext } from './App'

class ButtonCounter extends Component {
  render() {
    return (
      <RootContext.Consumer>
          {
              value => {
                  return(
                      <div>
                          {/* {value.state.globalNumber} */}
                          <button className='btn btn-primary mx-3' onClick={() => value.dispatch({type : "PLUS"})}>+</button>
                          <button className='btn btn-danger mx-3'onClick={() => value.dispatch({type : "MINUS"})}>-</button>
                      </div>
                  )
              }
          }
      </RootContext.Consumer>
    )
  }
}

export default ButtonCounter

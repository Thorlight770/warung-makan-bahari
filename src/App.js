import React, { Component, createContext } from 'react'
import ButtonCounter from './ButtonCounter';


export const RootContext = createContext();
const Provider = RootContext.Provider;

class App extends Component {
  state = {
    globalNumber : 3
  }

  dispatch = (action) => {
    if(action.type === "PLUS"){
      return this.setState({
        globalNumber : this.state.globalNumber + 1
      })
    }

    if(action.type === "MINUS"){
      return this.setState({
        globalNumber : this.state.globalNumber - 1
      })
    }
  }

  render() {
    return (
      <Provider value={{
        state : this.state,
        dispatch : this.dispatch
      }}>
      <div className='text-center'>
        <h1>{this.state.globalNumber}</h1>
        <ButtonCounter />
      </div>
      </Provider>
    )
  }
}

export default App

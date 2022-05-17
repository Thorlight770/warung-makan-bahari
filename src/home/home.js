import React, { Component } from 'react'
import Login from '../login/login'
import Swal from "sweetalert2";

export default class home extends Component {
    constructor(props){
        super(props);
        this.state = {
            menu : 0
        }
    }

    logout = () => {
     this.setState({
         menu : 1
     })   
     Swal.fire({
        icon : 'success',
        title : "Success LogOut"
      })
    }
  render() {
    return (
      <div>
          {this.state.menu === 1 ? <Login/> : 
          <div>Home
              <button type='button' onClick={this.logout}>Logout</button>
          </div>
          }
      </div>
    )
  }
}

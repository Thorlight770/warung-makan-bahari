import React, { Component } from "react";
import Swal from "sweetalert2";
import Home from "../home/home";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 0,
    };
  }

  login = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (password === "123" && username === "admin") {
      this.setState({
        menu: 1,
      });
      Swal.fire({
        icon : 'success',
        title : "Success Login"
      })
    }else{
      Swal.fire({
        icon : 'error',
        title : "Username & Password Invalid"
      })
    }
  };

  render() {
    return (
      <div>
        {this.state.menu === 1 ? <Home/> :
        <div className="container">
          <div className="box">
            <h1 className="text-center my-3">LOGIN TOKESHOP</h1>
            <label className="form-label py-2 mt-4">Username</label>
            <input type="text" className="form-control py-2" id="username"/>
            <label className="form-label py-2">Password</label>
            <input type="password" className="form-control py-2" id="password" />
            <button type="button" className="btn btn-primary my-4" onClick={this.login}>Login</button>
          </div>
        </div>
        
        }
      </div>
    );
  }
}

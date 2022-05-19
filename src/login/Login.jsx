import React, { Component } from "react";
import "../css/main.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: {
        email: "",
        password: "",
      },
      btnStatus: true
    };
  }

  handleLogin = () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if (email === "admin@example.com" && password === "12345678") {
      this.props.login(true)
    }else{
      alert("Incorrect login username or password")
    }
  }

  handleChange = (event) => {
    if (
      event.target.id === "email" &&
      !event.target.value.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/)
    ) {
      this.setState({
        errorMessage: {
          email: "Invalid email format"
        }
      });
    } else if (event.target.id === "password" && event.target.value.length < 6) {
      this.setState({
        errorMessage: {
          password: "6 min length character"
        }
      });
    } else {
      this.setState({
        errorMessage : {
          email : "",
          password : "",
        },
        btnStatus : false
      })
    }
  };

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="side-form col6">coba</div>
        <div className="login-form col-6">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                name="email"
                onChange={this.handleChange}
              />
              <div id="emailHelp" className="form-text">
                {this.state.errorMessage['email']}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
              />
              <div id="emailHelp" className="form-text">
                {this.state.errorMessage['password']}
              </div>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="button" className="btn btn-primary" disabled={this.state.btnStatus} onClick={this.handleLogin}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

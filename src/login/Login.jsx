import React, { Component } from "react";
import "../css/main.css";
import Swal from "sweetalert2";

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
      Swal.fire(
        'Success!',
        'Welcome WMB App!',
        'success'
      )
    }else{
      Swal.fire(
        'Access Denied!',
        'Incorrect login username or password!',
        'error'
      )
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
        }
      })
    }

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(email.length > 0 && password.length > 0){
      this.setState({
        btnStatus : false
      })
    }else{
      this.setState({
        btnStatus : true
      })
    }
  };

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="side-form col6">
          <h3>Warung Makan Bahari</h3>
          <p className="sub-text">This restaurant since 1634</p>
          <p className="content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus 
            quis veritatis quas doloribus, rerum, eveniet hic harum, optio nisi consequuntur iusto eos. Enim, quidem quibusdam voluptatum obcaecati quaerat nostrum reprehenderit.
          </p>
          <div className="d-flex my-5 justify-content-evenly align-items-start">
          <i class="bi bi-broadcast-pin"></i>
          <i class="bi bi-people-fill"></i>
          <i class="bi bi-egg-fried"></i>
          <i class="bi bi-hand-thumbs-up-fill"></i>
          <i class="bi bi-person-bounding-box"></i>
          </div>
          <button className="btn btn-outline-primary">About App</button>
        </div>
        <div className="login-form col-6">
          <form>
            <h1>LOGIN PAGE</h1>
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
            <button type="button" className="btn btn-primary" disabled={this.state.btnStatus} onClick={this.handleLogin}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Form from "./form/FormFood";

export default class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuForm: false,
    };
  }

  menuForm = () => {
    this.setState({
      menuForm: true,
    });
  };

  menuBack = () => {
    this.setState({
      menuForm: false,
    });
  };

  deleteFood(number) {
    this.props.removeFood(number)
  }

  render() {
    if (this.state.menuForm) {
      return <Form addFood={this.props.addFood} menuBack={this.menuBack} />;
    } else {
      return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <p className="navbar-brand">FOOD</p>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <button
                      className="btn btn-primary my-3"
                      onClick={this.menuForm}
                    >
                      New Food
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-danger"
                      onClick={this.props.logout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* TABLE DATA */}
          <div className="container-table d-flex justify-content-center">
            <div className="col-6">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.foods.map((food, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{food.name}</td>
                        <td>{food.price}</td>
                        <td>
                          <button className="btn btn-danger" onClick={() => {
                            this.deleteFood(i)}}>Deleted</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    }
  }
}

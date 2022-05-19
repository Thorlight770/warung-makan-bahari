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
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <p className="navbar-brand">
              FOOD PAGE WMB
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <p
                    onClick={this.menuForm}
                    className="nav-link active"
                    aria-current="page"
                  >
                    New Menu
                  </p>
                </li>
              </ul>
              <form className="d-flex">
                <button onClick={this.props.logout} className="btn btn-outline-success btn-menu" type="submit">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>

          {/* TABLE DATA */}
          <div className="container-table d-flex justify-content-center">
            <div className="col-6">
              <table className="table text-center">
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
                        <td>{food.id}</td>
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
        </div>
      );
    }
  }
}

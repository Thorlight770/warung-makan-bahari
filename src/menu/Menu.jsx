import React, { Component } from "react";
import Food from "./food/Food";
import Table from "./table/Table";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFood: false,
      isTable: false,
    };
  }

  menuFood = () => {
    this.setState({
      isFood: true,
    });
  };

  menuTable = () => {
    this.setState({
      isTable: true,
    });
  };

  logout = () => {
      this.props.logout(false)
  }

  render() {
    if (this.state.isFood) {
      return <Food 
      foods={this.props.foods} 
      addFood={this.props.addFood}
      removeFood={this.props.removeFood}
      logout={this.logout}/>;
    } else if (this.state.isTable) {
      return <Table 
      tables={this.props.tables}
      addTable={this.props.addTable}
      removeTable={this.props.removeTable}
      logout={this.logout}/>;
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <p className="navbar-brand">
              WMB
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
                    onClick={this.menuFood}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Food
                  </p>
                </li>
                <li className="nav-item">
                  <p onClick={this.menuTable} 
                  className="nav-link active"
                  aria-current="page"
                  >
                    Table
                  </p>
                </li>
              </ul>
              <form className="d-flex">
                <button onClick={this.logout} className="btn btn-outline-success" type="submit">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>
      );
    }
  }
}

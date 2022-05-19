import React, { Component } from "react";
import Form from "./form/FormTable";

export default class Table extends Component {
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

  deleteTable(number) {
    this.props.removeTable(number);
  }

  render() {
    if (this.state.menuForm) {
      return <Form addTable={this.props.addTable} menuBack={this.menuBack} />;
    } else {
      return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <p className="navbar-brand">TABLE PAGE WMB</p>
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
                      New Table
                    </p>
                  </li>
                </ul>
                <form className="d-flex">
                  <button
                    onClick={this.props.logout}
                    className="btn btn-outline-success btn-menu"
                    type="submit"
                  >
                    Logout
                  </button>
                </form>
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
                    <th scope="col">NUMBER TABLE</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.tables.map((table, i) => {
                    return (
                      <tr key={i}>
                        <td>{table.id}</td>
                        <td>{table.number}</td>
                        {table.status === "Available" ? (
                          <td style={{ color: "blue" }}>{table.status}</td>
                        ) : (
                          <td style={{ color: "orange" }}>{table.status}</td>
                        )}
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              this.deleteTable(i);
                            }}
                          >
                            Deleted
                          </button>
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

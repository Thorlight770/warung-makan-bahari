import React, { Component } from "react";

export default class FormTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: {
        id: "",
        number: "",
        status: "",
      },
      btnStatus: true,
    };
  }

  handleSubmit = (event) => {
    this.props.addTable(this.state.table);
    event.preventDefault();
  };

  handleChange = (event) => {
    if (event.target.name === "idTable") {
      this.setState({
        table: { ...this.state.table, id: event.target.value },
      });
    } else if (event.target.name === "numberTable") {
      this.setState({
        table: { ...this.state.table, number: event.target.value },
      });
    } else if (event.target.name === "statusTable") {
      this.setState({
        table: { ...this.state.table, status: event.target.value },
      });
    }

    // if () {
    //     this.setState({
    //         btnStatus : false
    //     })
    // }

    console.log(this.state.table);
  };

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="col-6">
          <form className="new-form" onSubmit={this.handleSubmit}>
            <label className="from-label">ID</label>
            <input
              type="text"
              className="form-control"
              name="idTable"
              onChange={this.handleChange}
            />
            <label className="from-label">NUMBER</label>
            <input
              type="text"
              className="form-control"
              name="numberTable"
              onChange={this.handleChange}
            />
            <label className="from-label">STATUS</label>
            <select
              class="form-select"
              aria-label="Default select example"
              value={this.state.table["status"]}
              name="statusTable"
              onChange={this.handleChange}
            >
              <option selected>--Chooes status table--</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
            <div className="d-flex my-2">
              <button className="btn btn-primary" type="submit">
                SUBMIT
              </button>
              <button
                className="btn btn-danger mx-3"
                type="buttom"
                onClick={this.props.menuBack}
              >
                CANCLE
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

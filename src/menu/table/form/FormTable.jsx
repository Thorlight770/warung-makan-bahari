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

    let id = document.getElementById("idTable").value
    let number = document.getElementById("numberTable").value
    let status = document.getElementById("statusTable").value

    console.log(id);

    if(id.length > 0 && number.length > 0 && status.length > 0){
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
        <div className="col-6">
          <form className="new-form" onSubmit={this.handleSubmit}>
            <label className="from-label">ID</label>
            <input
              type="text"
              className="form-control"
              name="idTable"
              id="idTable"
              onChange={this.handleChange}
            />
            <label className="from-label">NUMBER</label>
            <input
              type="text"
              className="form-control"
              name="numberTable"
              id="numberTable"
              onChange={this.handleChange}
            />
            <label className="from-label">STATUS</label>
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue={this.state.table["status"]}
              name="statusTable"
              id="statusTable"
              onChange={this.handleChange}
            >
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
            <div className="d-flex my-2">
              <button className="btn btn-primary" type="submit" disabled={this.state.btnStatus}>
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

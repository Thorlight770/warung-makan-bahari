import React, { Component } from "react";

export default class FormFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: {
        name: "",
        price: "",
      },
      message: {
        name: "",
        price: "",
      },
    };
  }

  handleSubmit = (event) => {
    this.props.addFood(this.state.food);
    event.preventDefault();
  };

  handleChange = (event) => {
    if (event.target.name === "nameProduct") {
      this.setState({
        food: { ...this.state.food, name: event.target.value },
      });
    } else if (event.target.name === "priceProduct") {
      this.setState({
        food: { ...this.state.food, price: event.target.value },
      });
    } else {
      this.setState({
        message: {
          name: "",
          price: "",
        },
      });
    }
  };

  render() {
    return (
      <div className="container d-flex justify-content-center">
        <div className="col-6">
          <form className="new-form" onSubmit={this.handleSubmit}>
            <label className="form-label">NAME</label>
            <input
              type="text"
              className="form-control"
              name="nameProduct"
              onChange={this.handleChange}
            />
            <br />
            <span>{this.state.message["name"]}</span>
            <br />
            <label className="form-label my-3">PRICE</label>
            <input
              type="text"
              className="form-control"
              name="priceProduct"
              onChange={this.handleChange}
            />
            <br />
            <span>{this.state.message["price"]}</span>
            <br />
            <div className="d-flex">
              <button className="btn btn-primary" type="submit">SUBMIT</button>
              <button className="btn btn-danger mx-3" type="button" onClick={this.props.menuBack}>CANCLE</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

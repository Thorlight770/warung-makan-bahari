import React, { Component } from "react";

export default class FormFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: {
        id: "",
        name: "",
        price: "",
      },
      message: {
        id: "required field",
        name: "required field",
        price: "required field",
      },
      btnStatus : true
    };
  }

  handleSubmit = (event) => {
    this.props.addFood(this.state.food);
    event.preventDefault();
  };

  handleChange = (event) => {
    if (event.target.name === "idProduct") {
      this.setState({
        food: { ...this.state.food, id: event.target.value },
        message: { ...this.state.message, id: "" },
      });
    } else if (event.target.name === "nameProduct") {
      this.setState({
        food: { ...this.state.food, name: event.target.value },
        message: { ...this.state.message, name: "" },
      });
    } else if (event.target.name === "priceProduct") {
      this.setState({
        food: { ...this.state.food, price: event.target.value },
        message: { ...this.state.message, price: "" },
      });
    } else {
      this.setState({
        message: {
          id: "required field",
          name: "required field",
          price: "required field",
        },
      });
    }

    let id = document.getElementById("idProduct").value
    let name = document.getElementById("nameProduct").value
    let price = document.getElementById("priceProduct").value

    if(id.length > 0 && name.length > 0 && price.length > 0){
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
            <label className="form-label">ID</label>
            <input
              type="text"
              className="form-control"
              name="idProduct"
              id="idProduct"
              onChange={this.handleChange}
            />
            <div id="emailHelp" className="form-text">
              {this.state.message["id"]}
            </div>
            <label className="form-label">NAME</label>
            <input
              type="text"
              className="form-control"
              name="nameProduct"
              id="nameProduct"
              onChange={this.handleChange}
            />
            <div id="emailHelp" className="form-text">
              {this.state.message["name"]}
            </div>
            <label className="form-label my-3">PRICE</label>
            <input
              type="text"
              className="form-control"
              name="priceProduct"
              id="priceProduct"
              onChange={this.handleChange}
            />
            <div id="emailHelp" className="form-text">
              {this.state.message["price"]}
            </div>
            <div className="d-flex my-3">
              <button className="btn btn-primary" type="submit" disabled={this.state.btnStatus}>
                SUBMIT
              </button>
              <button
                className="btn btn-danger mx-3"
                type="button"
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

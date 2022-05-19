import React, { Component } from "react";
import Login from "./login/Login";
import Menu from "./menu/Menu";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      tables: [],
      isLogin: false,
    };
  }

  loginAuth = (auth) => {
    this.setState({
      isLogin: auth,
    });
  };

  addFood = (food) => {
    console.log(food.name);
    const list = [...this.state.foods];
    list.push(food);
    this.setState({
      foods: list,
    });
  };

  removeFood = (food) => {
    console.log(food);
    const list = [...this.state.foods];
    // list.find(
  }

  render() {
    if (this.state.isLogin) {
      return (
        <Menu
          logout={this.loginAuth}
          foods={this.state.foods}
          tables={this.state.tables}
          addFood={this.addFood}
        />
      );
    } else {
      return <Login login={this.loginAuth} />;
    }
  }
}

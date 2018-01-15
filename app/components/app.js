import React, { Component } from "react";
import Background from "../images/redMountain.jpg";
import Nav from "./Nav";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: ""
    };
  }

  searchInput = event => {
    this.setState({
      searchterm: event.target.value
    });
    console.log(this.state.searchterm);
  };

  onSubmit = event => {
    // api.weather(this.state.city);
    //   .then(function (weather) {
    //     console.log(weather);
    // });
  };

  render() {
    const { searchterm } = this.state;
    return (
      <div
        className="app-container"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Nav searchInput={this.searchInput} onSubmit={this.onSubmit} />
        <Home searchInput={this.searchInput} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

module.exports = App;

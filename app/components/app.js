import React, { Component } from "react";
import Background from "../images/redMountain.jpg";
import Nav from "./Nav";
import Home from "./Home";
import Forecast from "./Forecast";
import Api from "../utils/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: "",
      forecast: ""
    };
  }

  searchInput = event => {
    this.setState({
      searchterm: event.target.value
    });
  };

  onSubmit = () => {
    Api.weather(this.state.searchterm).then(weather => {
      this.setState({
        searchterm: "",
        weather
      });
      console.log(weather);
    });
  };

  render() {
    const { searchterm, forecast } = this.state;
    return (
      <div
        className="app-container"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Nav searchInput={this.searchInput} onSubmit={this.onSubmit} />
        {forecast === "" || forecast === null ? (
          <Home searchInput={this.searchInput} onSubmit={this.onSubmit} />
        ) : (
          <Forecast forecast={forecast} />
        )}
      </div>
    );
  }
}

module.exports = App;

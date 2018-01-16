import React, { Component } from "react";
import Background from "../images/redMountain.jpg";
import Nav from "./Nav";
import Home from "./Home";
import Forecast from "./Forecast";
import Api from "../utils/api";
// import { Switch } from "../../../../Library/Caches/typescript/2.6/node_modules/@types/react-router";
import { Switch, Route } from "react-router-dom";

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
        <Switch>
          <Route exact path="/">
            <Home searchInput={this.searchInput} onSubmit={this.onSubmit} />
          </Route>
          <Route exact path="/roster">
            <Forecast forecast={forecast} />
          </Route>
        </Switch>
      </div>
    );
  }
}

module.exports = App;

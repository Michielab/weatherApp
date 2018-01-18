import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Forecast from "./Forecast";
import Details from "./Details";

import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Route
          render={props => {
            return (
              <Nav
                onSubmit={city => {
                  props.history.push({
                    pathname: "/forecast",
                    search: `?city=${city}`
                  });
                }}
              />
            );
          }}
        />
        <Route
          exact
          path="/"
          render={props => {
            return (
              <Home
                onSubmit={city => {
                  props.history.push({
                    pathname: "/forecast",
                    search: `?city=${city}`
                  });
                }}
              />
            );
          }}
        />
        <Route path="/forecast" component={Forecast} />
        <Route path="/details/:city" component={Details} />
      </div>
    );
  }
}

export default App;

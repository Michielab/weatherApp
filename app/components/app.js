import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Forecast from "./Forecast";
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
        {/* <Route
          exact
          path="/"
          render={props => {
            return (
              <Home
                searchInput={this.searchInput}
                onSubmit={city => {
                  props.history.push({
                    pathname: "/forecast",
                    search: `?city=${searchterm}`
                  });
                }}
              />
            );
          }}
        /> */}

        <Route path="/forecast" component={Forecast} />
      </div>
    );
  }
}

export default App;

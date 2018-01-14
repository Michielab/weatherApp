import React, { Component } from "react";
import Background from "../images/redMountain.jpg";
import Nav from "./Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: ""
    };
  }

  // searchInput = event => {
  //   this.setState({
  //     searchterm: event.target.value
  //   });
  // };

  // onSubmit = event => {
  //   this.setState({
  //     searchterm: event.target.value
  //   });
  // };

  render() {
    const { searchterm } = this.state;
    return (
      <div
        className="app-container"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Nav
          searchterm={searchterm}
          // searchInput={this.searchInput}
          // onSubmit={this.onSubmit}
        />
        {/* <img src={Background} /> */}
        {/* <Home
          className="home"
          style={{ backgroundImage: "url('../images/redMountain.jpg')" }}
        /> */}
      </div>
    );
  }
}

module.exports = App;

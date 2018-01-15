import React, { Component } from "react";

class Home extends Component {
  render() {
    const { searchInput, onSubmit } = this.props;

    return (
      <div className="home-container">
        <h1 className="title-home">Weather checker</h1>
        <div className="search-container-home">
          <input
            className="input-city"
            id="home"
            placeholder="Amsterdam"
            className="input-city"
            onChange={searchInput}
          />
          <button className="search-city" onClick={onSubmit}>
            Get Weather
          </button>
        </div>
      </div>
    );
  }
}

module.exports = Home;

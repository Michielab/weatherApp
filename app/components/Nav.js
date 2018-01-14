import React from "react";

class Nav extends React.Component {
  searchInput = event => {};
  render() {
    const { searchInput, onSubmit } = this.props;

    return (
      <div className="navBar">
        <h1 className="title-nav">Weather checker</h1>
        <div className="search-container">
          <input
            placeholder="Amsterdam"
            className="input-city"
            onChange={() => searchInput()}
          />
          <button className="search-city" onSubmit={onSubmit}>
            Get Weather
          </button>
        </div>
      </div>
    );
  }
}

module.exports = Nav;

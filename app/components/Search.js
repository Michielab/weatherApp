import React, { Component } from "react";

class Search extends Component {
  render() {
    const { searchInput, onSubmit } = this.props;
    return (
      <div className="search-component">
        <input
          placeholder="Amsterdam"
          className="input-city"
          onChange={() => searchInput()}
        />
        <button className="search-city" onSubmit={onSubmit}>
          Get Weather
        </button>
      </div>
    );
  }
}

export default Search;

import React from "react";

class Nav extends React.Component {
  render() {
    const { searchInput, onSubmit, searchterm } = this.props;

    return (
      <div className="navBar">
        <h1 className="title-nav">Weather checker</h1>
        <div className="search-container">
          <input
            className="input-city"
            placeholder="Amsterdam"
            className="input-city"
            onChange={searchInput}
          />
          <button className="search-city" onSubmit={onSubmit}>
            Get Weather
          </button>
        </div>
      </div>
    );
  }
}

export default Nav;

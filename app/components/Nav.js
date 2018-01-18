import React from "react";
import Search from "./Search";

class Nav extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div className="navBar">
        <h1 className="title-nav">Weather checker</h1>
        <Search onSubmit={onSubmit} styling="search-container" />
      </div>
    );
  }
}

export default Nav;

import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div className="navBar">
        {/* <Link>
          <h1 className="title-nav">Weather checker</h1>
        </Link> */}
        <Link className="title-nav" to="/">
          Weather checker
        </Link>
        <Search onSubmit={onSubmit} styling="search-container" />
      </div>
    );
  }
}

export default Nav;

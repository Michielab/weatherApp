import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Nav extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <div className="navBar">
        <Link className="title-nav" to="/">
          Weather checker
        </Link>
        <Search onSubmit={onSubmit} styling="search-container" />
      </div>
    );
  }
}

Nav.propTypes = {
  onSubmit: PropTypes.func
};

export default Nav;

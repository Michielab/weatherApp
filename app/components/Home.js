import React, { Component } from "react";
import Background from "../images/redMountain.jpg";
import Search from "./Search";
import PropTypes from "prop-types";

class Home extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <div
        className="home-container"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <h1 className="title-home">Weather checker</h1>
        <Search onSubmit={onSubmit} styling="search-container-home" />
      </div>
    );
  }
}

Home.propTypes = {
  onSubmit: PropTypes.func
};

export default Home;

import React, { Component } from "react";
import PropTypes from "prop-types";
import Api from "../utils/api";
import queryString from "query-string";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "",
      forecastData: []
    };
  }
  componentDidMount() {
    let city = queryString.parse(this.props.location.search).city;
    this.makeRequest(city);
  }

  makeRequest(city) {
    this.setState({
      loading: true
    });

    api.weather(city).then(res => {
      this.setState({ loading: false, forecastData: res });
    });
  }
  render() {
    return <div />;
  }
}

Forecast.propTypes = {};

export default Forecast;

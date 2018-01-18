import React, { Component } from "react";
import PropTypes from "prop-types";
import Api from "../utils/api";
import queryString from "query-string";
import DayWeather from "./DayWeather";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: {},
      loading: true
    };
  }
  componentDidMount() {
    let city = queryString.parse(this.props.location.search).city;
    this.makeRequest(city);
  }

  componentWillReceiveProps(nextProps) {
    let city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(city);
  }

  makeRequest(city) {
    this.setState({
      loading: true
    });

    Api.weather(city).then(res => {
      this.setState({ loading: false, forecastData: res });
    });
  }

  render() {
    const { loading, forecastData } = this.state;
    console.log("test");
    return loading === true ? (
      <h1 className="forecast-header"> Loading </h1>
    ) : (
      <div>
        <h1 className="forecast-header">{forecastData.city}</h1>
        <div className="forecast-container">
          {forecastData.weatherList.map(function(listItem) {
            return <DayWeather key={listItem.dt} day={listItem} />;
          }, this)}
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {};

export default Forecast;

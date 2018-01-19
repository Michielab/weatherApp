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
      currentWeather: "",
      loading: true,
      error: false
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
      if (res.weather === null || res.currentWeather === null) {
        this.setState({
          error: true
        });
      }
      this.setState({
        loading: false,
        forecastData: res.weather,
        currentWeather: res.currentWeather
      });
    });
  }

  getDetails = city => {
    let cityName = this.state.forecastData.city;
    this.props.history.push({
      pathname: `/details/${cityName}`,
      state: city
    });
  };

  render() {
    const { loading, forecastData, currentWeather, error } = this.state;
    return loading === true ? (
      error === true ? (
        <h1 className="forecast-header"> Oops, can't find the city! </h1>
      ) : (
        <h1 className="forecast-header"> Loading </h1>
      )
    ) : (
      <div>
        <h1 className="forecast-header">{forecastData.city}</h1>
        <div className="forecast-container">
          {forecastData.weatherList.map((listItem, index) => {
            return (
              <DayWeather
                key={listItem.dt}
                day={listItem}
                details={this.getDetails}
                temp={index === 0 ? currentWeather : listItem.temp.day}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Forecast;

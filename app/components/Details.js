import React, { Component } from "react";
import DayWeather from "./DayWeather";
import utils from "../utils/helpers";

class Detail extends Component {
  render() {
    const props = this.props.location.state;
    return (
      <div>
        <DayWeather day={props} />
        <div className="description-container">
          <p>{props.city}</p>
          <p>{props.weather[0].description}</p>
          <p>min temp: {utils.convertTemp(props.temp.min)} degrees</p>
          <p>max temp: {utils.convertTemp(props.temp.max)} degrees</p>
          <p>humidity: {props.humidity}</p>
        </div>
      </div>
    );
  }
}

export default Detail;

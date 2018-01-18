import React, { Component } from "react";
import utils from "../utils/helpers";

function DayWeather(props) {
  const date = utils.getDate(props.day.dt);
  const icon = props.day.weather[0].icon;
  return (
    <div className="dayContainer">
      <img
        className="weather"
        src={"/app/images/weather-icons/" + icon + ".svg"}
        alt="Weather"
      />
      <h2 className="subheader">{date}</h2>
    </div>
  );
}

export default DayWeather;

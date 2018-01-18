import React, { Component } from "react";
// var utils = require("../utils/helpers");
// var getDate = utils.getDate;

function DayWeather(props) {
  //   var date = getDate(props.day.dt);
  const icon = props.day.weather[0].icon;
  return (
    <div className="dayContainer">
      <img
        className="weather"
        src={"/app/images/weather-icons/" + icon + ".svg"}
        alt="Weather"
      />
      {/* <h2 className="subheader">{date}</h2> */}
    </div>
  );
}

export default DayWeather;

import React, { Component } from "react";
import utils from "../utils/helpers";
import PropTypes from "prop-types";

function DayWeather(props) {
  const date = utils.getDate(props.day.dt);
  const icon = props.day.weather[0].icon;
  return (
    <div
      className="dayContainer"
      onClick={() => {
        props.details(props.day);
      }}
    >
      <img
        className="weather"
        src={`weather-icons/${icon}.svg`}
        alt="Weather"
      />
      {props.temp ? (
        <h2 className="degrees">{utils.convertTemp(props.temp)} degrees</h2>
      ) : (
        ""
      )}
      <h2 className="subheader">{date}</h2>
    </div>
  );
}

DayWeather.propTypes = {
  day: PropTypes.object,
  details: PropTypes.func,
  temp: PropTypes.number
};

export default DayWeather;

const axios = require("axios");
const APIKEY = "b714ec74bbab5650795063cb0fdf5fbe";

function getWeather(city) {
  city = capitalize(city);
  return axios
    .get(
      "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +
        city +
        `&type=accurate&APPID=${APIKEY}&cnt=5`
    )
    .then(function(res) {
      return { city: res.data.city.name, weatherList: res.data.list };
    })
    .catch(handleError);
}
function handleError(error) {
  console.warn(error);
  return null;
}

function getCityId(cityName) {
  return axios
    .get("http://localhost:8080/app/utils/city.list.json")
    .then(cities => {
      return cities.data.filter(city => city.name == cityName);
    })
    .catch(handleError);
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

module.exports = {
  weather: city => {
    return getWeather(city);
  }
};

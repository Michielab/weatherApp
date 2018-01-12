var axios = require('axios');
var APIKEY = '83cafbdc45e0544bc59c8e671eb700b1';


// http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml

function getWeather (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + `&APPID=${APIKEY}`)
    .then(function (weather) {
      return weather.data;
    });
}

module.exports = {
  weather: function(city){
    return getWeather(city);}
};

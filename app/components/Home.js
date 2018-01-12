var React = require('react');
var api = require('../utils/api');

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      city: ""
    };

this.handleChange = this.handleChange.bind(this);
this.handleClick = this.handleClick.bind(this);
  }

handleChange(event){
  var value = event.target.value;
  this.setState(function(){
    return {
      city: value
    };
  });
}

handleClick(){
  api.weather(this.state.city)
  .then(function (weather) {
    console.log(weather);
});
}



render(){
  return(
      <div className='home-container'>
        <h1>
          Enter a City or Country
        </h1>
        <input
          placeholder="Amsterdam"
          onChange={this.handleChange}
          value={this.state.city}
        />
        <button
          onClick={this.handleClick}
          >
          Get Weather
        </button>
      </div>
    )
  }
}

module.exports = Home;

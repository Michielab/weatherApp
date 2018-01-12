var React = require('react');
var Nav = require('./Nav');
var Home = require('./Home');

class App extends React.Component {
render(){
  return(
      <div className='container'>
        <Nav/>
        <Home className='home' style={{backgroundImage: "url('app/images/pattern.svg')"}}/>
      </div>

  )
  }
}

module.exports = App;

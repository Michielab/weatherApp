var React = require('react');

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <h1>
          Weather checker
        </h1>
        <input
          placeholder="Amsterdam"
        />
      </div>
    );
  }
}

module.exports = Nav;

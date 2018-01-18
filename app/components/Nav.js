import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchterm: ""
    };
  }

  searchInput = event => {
    this.setState({
      searchterm: event.target.value
    });
  };
  render() {
    const { onSubmit } = this.props;
    const { searchterm } = this.state;

    return (
      <div className="navBar">
        <h1 className="title-nav">Weather checker</h1>
        <div className="search-container">
          <input
            className="input-city"
            placeholder="Amsterdam"
            className="input-city"
            onChange={this.searchInput}
          />
          <button
            className="search-city"
            onClick={() => {
              onSubmit(searchterm);
            }}
          >
            Get Weather
          </button>
        </div>
      </div>
    );
  }
}

export default Nav;

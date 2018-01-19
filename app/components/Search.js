import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
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

  getWeather = () => {
    this.props.onSubmit(this.state.searchterm);
    this.setState({
      searchterm: ""
    });
  };

  render() {
    const { onSubmit, styling } = this.props;
    const { searchterm } = this.state;

    return (
      <div className={styling}>
        <input
          className="input-city"
          placeholder="City"
          className="input-city"
          onChange={this.searchInput}
          value={searchterm}
        />
        <button className="search-city" onClick={this.getWeather}>
          Get Weather
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func,
  styling: PropTypes.string
};

export default Search;

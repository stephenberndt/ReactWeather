var React = require('react');
var ReactDOM = require('react-dom');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openweathermap = require('openweathermap');

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading: true})

    openweathermap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage) {
      alert(errorMessage)
      that.setState({isLoading: false})
    });

  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }


    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}

      </div>

    )
  }
})

module.exports = Weather;
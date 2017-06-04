var React = require('react');
var ReactDOM = require('react-dom');

//this is a common way to pull values directly off of the props object

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>It's {temp}F in {location}</h3>
    </div>
  );
};

module.exports = WeatherMessage;

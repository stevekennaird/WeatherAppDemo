import React, { Component } from "react";
import "../css/weather-icons.css";

class WeatherSummaryIcon extends Component {
  render() {
    let iconClass = "na";
    let foreColour = "#000000";

    switch (this.props.summary.toLowerCase()) {
      case "sunny":
        iconClass = "day-sunny";
        foreColour = "#e8ef26";
        break;
      case "cloudy":
        iconClass = "cloudy";
        foreColour = "#c3d7d8";
        break;
      case "snow":
      case "snowy":
        iconClass = "snow";
        foreColour = "#ffffff";
        break;
      case "thunderstorm":
        iconClass = "thunderstorm";
        foreColour = "#333333";
        break;
      case "lightening":
        iconClass = "lightening";
        foreColour = "#333333";
        break;
      case "rain":
      case "rainy":
        iconClass = "rain";
        foreColour = "#777777";
        break;
      case "showers":
        iconClass = "showers";
        foreColour = "#333333";
        break;
    }
    iconClass = `wi wi-${iconClass}`;

    return (
      <span
        className="weather-icon"
        style={{
          color: foreColour
        }}
      >
        <i className={iconClass} />
      </span>
    );
  }
}

export default WeatherSummaryIcon;

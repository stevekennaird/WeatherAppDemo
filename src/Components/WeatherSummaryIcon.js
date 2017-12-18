import React, { Component } from "react"

class WeatherSummaryIcon extends Component {
  render() {
    return (
      <span className="weather-icon">
        <img src={this.props.iconPath} title={this.props.altText} alt={this.props.altText} />
      </span>
    )
  }
}

export default WeatherSummaryIcon

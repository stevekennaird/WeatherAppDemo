import React, { Component } from "react"
import PropTypes from "prop-types"

class WeatherSummaryIcon extends Component {
  render() {
    return (
      <span className="weather-icon">
        <img src={this.props.iconPath} title={this.props.altText} alt={this.props.altText} />
      </span>
    )
  }
}

WeatherSummaryIcon.propTypes = {
  iconPath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}

export default WeatherSummaryIcon

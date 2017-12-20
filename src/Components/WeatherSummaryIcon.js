import React from "react"
import PropTypes from "prop-types"

const WeatherSummaryIcon = props => (
  <span className="weather-icon">
    <img src={props.iconPath} title={props.altText} alt={props.altText} />
  </span>
)

WeatherSummaryIcon.propTypes = {
  iconPath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}

export default WeatherSummaryIcon

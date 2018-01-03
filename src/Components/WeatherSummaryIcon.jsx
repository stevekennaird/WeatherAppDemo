import React from "react"
import PropTypes from "prop-types"

WeatherSummaryIcon.propTypes = {
  iconPath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}

export default function WeatherSummaryIcon({ iconPath, altText = "" }) {
  return (
    <span className="weather-icon">
      <img src={iconPath} title={altText} alt={altText} />
    </span>
  )
}

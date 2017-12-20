import React from "react"
import WeatherSummaryIcon from "./WeatherSummaryIcon"
import PropTypes from "prop-types"

// Functional stateless component showing the summary for a day, which when clicked
// loads the hourly forecast for the day
const DayNavItem = props => (
  <div className={props.selected ? "day selected" : "day"} onClick={props.onclick}>
    <h3>{props.date.toLocaleString({ weekday: "long" }).substring(0, 3)}</h3>
    <h4>{props.date.toFormat("dd/MM")}</h4>
    <WeatherSummaryIcon iconPath={props.iconPath} altText={props.summary} />
    <div className="temperatures">
      <span title="Max temperature">{props.maxTemp}</span>
      {" / "}
      <span title="Min temperature">{props.minTemp}</span>
    </div>
  </div>
)

DayNavItem.propTypes = {
  selected: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  iconPath: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  minTemp: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired
}

export default DayNavItem

import React from "react"
import WeatherSummaryIcon from "./WeatherSummaryIcon"
import PropTypes from "prop-types"

// Functional stateless component showing the summary for a day, which when clicked
// loads the hourly forecast for the day

DayNavItem.propTypes = {
  selected: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  iconPath: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  minTemp: PropTypes.string.isRequired,
  maxTemp: PropTypes.string.isRequired
}

export default function DayNavItem({
  selected,
  onclick,
  date,
  iconPath,
  summary,
  maxTemp,
  minTemp
}) {
  return (
    <div className={selected ? "day selected" : "day"} onClick={onclick}>
      <h3>{date.toLocaleString({ weekday: "long" }).substring(0, 3)}</h3>
      <h4>{date.toFormat("dd/MM")}</h4>
      <WeatherSummaryIcon iconPath={iconPath} altText={summary} />
      <div className="temperatures">
        <span title="Max temperature">{maxTemp}</span>
        {" / "}
        <span title="Min temperature">{minTemp}</span>
      </div>
    </div>
  )
}

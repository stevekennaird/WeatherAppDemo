import React, { Component } from "react"
import WeatherSummaryIcon from "./WeatherSummaryIcon"
import PropTypes from "prop-types"

class DayNavItem extends Component {
  render() {
    return (
      <div className={this.props.selected ? "day selected" : "day"} onClick={this.props.onclick}>
        <h3>{this.props.date.toLocaleString({ weekday: "long" }).substring(0, 3)}</h3>
        <h4>{this.props.date.toFormat("dd/MM")}</h4>
        <WeatherSummaryIcon iconPath={this.props.iconPath} altText={this.props.summary} />
        <div className="temperatures">
          <span title="Max temperature">{this.props.maxTemp}</span>
          {" / "}
          <span title="Min temperature">{this.props.minTemp}</span>
        </div>
      </div>
    )
  }
}

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

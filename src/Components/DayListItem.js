import React, { Component } from "react"
import WeatherSummaryIcon from "./WeatherSummaryIcon"
import PropTypes from "prop-types"

class DayListItem extends Component {
  render() {
    return (
      <div className={this.props.selected ? "day selected" : "day"} onClick={this.props.onclick}>
        <h3>{this.props.date.toLocaleString({ weekday: "long" }).substring(0, 3)}</h3>
        <h4>{this.props.date.toFormat("dd/MM")}</h4>
        <WeatherSummaryIcon iconPath={this.props.iconPath} altText={this.props.summary} />
      </div>
    )
  }
}

DayListItem.propTypes = {
  selected: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  date: PropTypes.object.isRequired,
  iconPath: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}

export default DayListItem

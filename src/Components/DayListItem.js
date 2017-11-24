import React, { Component } from "react";
import WeatherSummaryIcon from "./WeatherSummaryIcon";

class DayListItem extends Component {
  render() {
    return (
      <div
        className={this.props.selected ? "day selected" : "day"}
        onClick={this.props.onclick}
      >
        <h3>{this.props.dayOfWeek.substring(0, 3)}</h3>
        <WeatherSummaryIcon summary={this.props.summary} />
      </div>
    );
  }
}

export default DayListItem;

import React, { Component } from "react";
import weatherForecast from "../Data/weather.json";
import DayListItem from "./DayListItem";

class DayList extends Component {
  render() {
    const days = weatherForecast.Days.map(day => (
      <DayListItem dayOfWeek={day.DayOfWeek} summary={day.ShortSummary} />
    ));

    return (
      <div>
        <h3>This week's weather:</h3>
        <div className="dayListContainer">{days}</div>
      </div>
    );
  }
}

export default DayList;

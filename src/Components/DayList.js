import React, { Component } from "react";
import weatherForecast from "../Data/weather.json";
import DayListItem from "./DayListItem";

class DayList extends Component {
  constructor() {
    super();
    this.state = { selectedIndex: 0 };
  }

  handleDayClick = newIndex => {
    this.setState({ selectedIndex: newIndex });
  };

  render() {
    const days = weatherForecast.Days.map((day, index) => (
      <DayListItem
        key={index}
        dayOfWeek={day.DayOfWeek}
        summary={day.ShortSummary}
        selected={index === this.state.selectedIndex}
        onclick={() => this.handleDayClick(index)}
      />
    ));

    return (
      <div>
        <h3>Select a day to view an hourly forecast:</h3>
        <div className="dayListContainer">{days}</div>
      </div>
    );
  }
}

export default DayList;

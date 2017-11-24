import React, { Component } from 'react';
import weatherForecast from '../Data/weather.json'
import DayListItem from './DayListItem';


class DayList extends Component {
  render() {
    const days = weatherForecast.Days.map((day) =>
      (
        <DayListItem  
          dayOfWeek={day.DayOfWeek}
        />
      )
    )

    return (
      <div>
        <h1>Day List</h1>
        {days}
      </div>
    )
  }
}

export default DayList
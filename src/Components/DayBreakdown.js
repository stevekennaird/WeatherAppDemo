import React, { Component } from "react"
import { DateTime } from "luxon"
import HourItem from "./HourItem"

export default class DayBreakdown extends Component {
  render() {
    const now = DateTime.local()
    const dateDisplay = DateTime.fromISO(this.props.date).toLocaleString(DateTime.DATE_HUGE)
    const hours = this.props.hours.map((hour, index) => {
      const time = DateTime.fromString(hour.time, "yyyy-MM-dd HH:mm")

      // Don't show hours in the past
      if (time < now) {
        return null
      }

      return (
        <HourItem
          key={index}
          hour={time.toFormat("HH")}
          summary={hour.condition.text}
          iconPath={hour.condition.icon}
          temperature={`${Math.round(hour.temp_c)}°C`}
          chanceOfRain={`${hour.chance_of_rain}%`}
          temperatureFeelsLike={`${Math.round(hour.feelslike_c)}°C`}
          precipitation={`${hour.precip_mm}mm`}
          windDirection={hour.wind_dir}
          windSpeed={`${hour.wind_mph} mph`}
        />
      )
    })

    return (
      <div>
        <div className="dayBreakdownContainer">{hours}</div>
      </div>
    )
  }
}

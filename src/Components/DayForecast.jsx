import React, { Component } from "react"
import { DateTime } from "luxon"
import HourForecast from "./HourForecast"

export default class DayForecast extends Component {
  render() {
    const now = DateTime.local()
    const hours = this.props.hours.map((hour, index) => {
      const time = DateTime.fromString(hour.time, "yyyy-MM-dd HH:mm")

      // Don't show hours in the past
      if (time < now) {
        return null
      }

      return (
        <HourForecast
          key={index}
          hour={time.toFormat("HH")}
          summary={hour.condition.text}
          iconPath={hour.condition.icon}
          temperature={`${Math.round(hour.temp_c)}°`}
          chanceOfRain={`${hour.chance_of_rain}%`}
          temperatureFeelsLike={`${Math.round(hour.feelslike_c)}°`}
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

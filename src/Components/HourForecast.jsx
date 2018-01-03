import React from "react"
import WeatherSummaryIcon from "./WeatherSummaryIcon"
import Badge from "./Badge"
import ReactTooltip from "react-tooltip"
import PropTypes from "prop-types"

HourForecast.propTypes = {
  hour: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  chanceOfRain: PropTypes.string.isRequired,
  temperatureFeelsLike: PropTypes.string.isRequired,
  precipitation: PropTypes.string.isRequired,
  windDirection: PropTypes.string.isRequired,
  windSpeed: PropTypes.string.isRequired
}

export default function HourForecast({
  hour,
  summary,
  iconPath,
  temperature,
  chanceOfRain,
  temperatureFeelsLike,
  precipitation,
  windDirection,
  windSpeed
}) {
  const tooltipId = `tooltip_${hour}`
  return (
    <div className="hour" data-tip data-for={tooltipId}>
      <h5>
        {hour}
        <sup>00</sup>
      </h5>
      <WeatherSummaryIcon iconPath={iconPath} altText={summary} />
      <Badge content={temperature} />
      <ReactTooltip id={tooltipId} aria-haspopup="true" data-place="bottom">
        <div className="hour-tooltip-contents">
          <strong>
            {hour}:00 - {summary}
          </strong>
          <hr />
          <table>
            <tbody>
              <tr>
                <td>Chance of rain</td>
                <td>{chanceOfRain}</td>
              </tr>
              <tr>
                <td>Feels like</td>
                <td>{temperatureFeelsLike}</td>
              </tr>
              <tr>
                <td>Precipitation</td>
                <td>{precipitation}</td>
              </tr>
              <tr>
                <td>Wind direction</td>
                <td>{windDirection}</td>
              </tr>
              <tr>
                <td>Wind speed</td>
                <td>{windSpeed}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ReactTooltip>
    </div>
  )
}

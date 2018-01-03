import React from "react"
import WeatherSummaryIcon from "./WeatherSummaryIcon"
import Badge from "./Badge"
import ReactTooltip from "react-tooltip"
import PropTypes from "prop-types"

const HourForecast = props => {
  const tooltipId = `tooltip_${props.hour}`
  return (
    <div className="hour" data-tip data-for={tooltipId}>
      <h5>
        {props.hour}
        <sup>00</sup>
      </h5>
      <WeatherSummaryIcon iconPath={props.iconPath} altText={props.summary} />
      <Badge content={props.temperature} />
      <ReactTooltip id={tooltipId} aria-haspopup="true" data-place="bottom">
        <div className="hour-tooltip-contents">
          <strong>
            {props.hour}:00 - {props.summary}
          </strong>
          <hr />
          <table>
            <tbody>
              <tr>
                <td>Chance of rain</td>
                <td>{props.chanceOfRain}</td>
              </tr>
              <tr>
                <td>Feels like</td>
                <td>{props.temperatureFeelsLike}</td>
              </tr>
              <tr>
                <td>Precipitation</td>
                <td>{props.precipitation}</td>
              </tr>
              <tr>
                <td>Wind direction</td>
                <td>{props.windDirection}</td>
              </tr>
              <tr>
                <td>Wind speed</td>
                <td>{props.windSpeed}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ReactTooltip>
    </div>
  )
}

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

export default HourForecast

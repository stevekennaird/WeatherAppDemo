import React, { Component } from "react"
import WeatherSummaryIcon from "./WeatherSummaryIcon"
import Badge from "./Badge"
import ReactTooltip from "react-tooltip"
import PropTypes from "prop-types"

class HourItem extends Component {
  render() {
    const tooltipId = `tooltip_${this.props.hour}`
    return (
      <div className="hour" data-tip data-for={tooltipId}>
        <h5>
          {this.props.hour}
          <sup>00</sup>
        </h5>
        <WeatherSummaryIcon iconPath={this.props.iconPath} altText={this.props.summary} />
        <Badge content={this.props.temperature} />
        <ReactTooltip id={tooltipId} aria-haspopup="true" data-place="bottom">
          <div className="hour-tooltip-contents">
            <strong>
              {this.props.hour}:00 - {this.props.summary}
            </strong>
            <hr />
            <table>
              <tbody>
                <tr>
                  <td>Chance of rain</td>
                  <td>{this.props.chanceOfRain}</td>
                </tr>
                <tr>
                  <td>Feels like</td>
                  <td>{this.props.temperatureFeelsLike}</td>
                </tr>
                <tr>
                  <td>Precipitation</td>
                  <td>{this.props.precipitation}</td>
                </tr>
                <tr>
                  <td>Wind direction</td>
                  <td>{this.props.windDirection}</td>
                </tr>
                <tr>
                  <td>Wind speed</td>
                  <td>{this.props.windSpeed}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ReactTooltip>
      </div>
    )
  }
}

HourItem.propTypes = {
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

export default HourItem

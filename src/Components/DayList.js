import React, { Component } from "react"
import axios from "axios"
import { DateTime } from "luxon"
import DayListItem from "./DayListItem"
import ErrorMessage from "./ErrorMessage"
import LoadingSpinner from "./LoadingSpinner"

class DayList extends Component {
  constructor() {
    super()
    this.state = {
      dataLoaded: false,
      dataError: false,
      selectedIndex: 0
    }
  }

  componentDidMount = () => {
    this.loadData("London") // Could do a location search thing later
  }

  loadData = location => {
    const apiKey = "fdd32583386d4d6d9e4111647171812"
    axios
      .get(`http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`)
      .then(response => {
        console.log("Forecast", response.data.forecast)
        this.setState({
          dataLoaded: true,
          dataError: false,
          errorMessage: null,
          forecast: response.data.forecast
        })
      })
      .catch(error => {
        this.setState({
          dataLoaded: false,
          dataError: true,
          errorMessage: error.message
        })
      })
  }

  handleDayClick = newIndex => {
    this.setState({ selectedIndex: newIndex })
  }

  render() {
    if (this.state.dataError) {
      return (
        <ErrorMessage
          summary="There was a problem fetching data from the API"
          detail={this.state.errorMessage}
        />
      )
    }

    if (!this.state.dataLoaded) {
      return <LoadingSpinner />
    }

    const days = this.state.forecast.forecastday.map((day, index) => {
      const dayDate = DateTime.fromISO(day.date)
      return (
        <DayListItem
          key={index}
          dayOfWeek={dayDate.toLocaleString({ weekday: "long" })}
          summary={day.day.condition.text}
          selected={index === this.state.selectedIndex}
          iconPath={day.day.condition.icon}
          onclick={() => this.handleDayClick(index)}
        />
      )
    })

    return (
      <div>
        <h3>Select a day to view an hourly forecast:</h3>
        <div className="dayListContainer">{days}</div>
      </div>
    )
  }
}

export default DayList

import React, { Component } from "react"
import axios from "axios"
import { DateTime } from "luxon"
import DayListItem from "./DayListItem"
import ErrorMessage from "./ErrorMessage"
import LoadingSpinner from "./LoadingSpinner"
import DayBreakdown from "./DayBreakdown"

class DayList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataLoaded: false,
      dataError: false,
      selectedIndex: 0
    }
  }

  // Call the API to load the data on page load (i.e. default location)
  componentDidMount = () => {
    this.loadData(this.props.location)
  }

  // Call the API to load the data when the user changes the location
  componentWillReceiveProps = nextProps => {
    this.loadData(nextProps.location)
  }

  loadData = location => {
    const apiKey = "fdd32583386d4d6d9e4111647171812"
    axios
      .get(`http://api.apixu.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`)
      .then(response => {
        console.log("Forecast", response.data)
        this.setState({
          dataLoaded: true,
          dataError: false,
          errorMessage: null,
          forecast: response.data.forecast,
          locationName: `${response.data.location.name}, ${response.data.location.country}`
        })
      })
      .catch(error => {
        const errorMsg =
          error.response &&
          error.response.data &&
          error.response.data.error &&
          error.response.data.error.message
            ? error.response.data.error.message
            : error.message

        this.setState({
          dataLoaded: false,
          dataError: true,
          errorMessage: errorMsg,
          forecast: null,
          locationName: ""
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
          date={dayDate}
          summary={day.day.condition.text}
          selected={index === this.state.selectedIndex}
          iconPath={day.day.condition.icon}
          minTemp={`${Math.round(day.day.mintemp_c)}°C`}
          maxTemp={`${Math.round(day.day.maxtemp_c)}°C`}
          onclick={() => this.handleDayClick(index)}
        />
      )
    })

    const selectedDay = this.state.forecast.forecastday[this.state.selectedIndex]
    // console.log("selectedDay", selectedDay)
    return (
      <div>
        <h2>7-day Forecast for {this.state.locationName}</h2>
        <div className="dayListContainer">{days}</div>
        <DayBreakdown date={selectedDay.date} hours={selectedDay.hour} />
      </div>
    )
  }
}

export default DayList

import React, { Component } from "react"
import PropTypes from "prop-types"

// The location search form, with a textbox and a button
class LocationForm extends Component {
  state = {
    location: this.props.defaultLocation,
    currentValue: this.props.defaultLocation
  }

  updateLocationToCurrentValue = () => {
    this.setState({ location: this.state.currentValue })
    this.props.onSubmit(this.state.currentValue)
  }

  // Update the state with the latest textbox value
  handleChange = event => {
    this.setState({ currentValue: event.target.value })
  }

  // The user has hit the button to load a forecast
  handleClick = event => {
    event.preventDefault()
    this.updateLocationToCurrentValue()
  }

  // Handle the user hitting enter/return after their search
  handleSubmit = event => {
    if (event.key === "Enter") {
      this.updateLocationToCurrentValue()
    }
  }

  render() {
    return (
      <div className="location-search-form">
        <label htmlFor="locationSearch">Location:</label>
        <input
          id="locationSearch"
          type="text"
          value={this.state.currentValue}
          onChange={this.handleChange}
          onKeyPress={this.handleSubmit}
        />
        <button
          onClick={this.handleClick}
          disabled={
            !this.state.currentValue ||
            this.state.currentValue.length < 2 ||
            this.state.currentValue === this.state.location
          }
        >
          Go!
        </button>
      </div>
    )
  }
}

LocationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultLocation: PropTypes.string.isRequired
}

export default LocationForm

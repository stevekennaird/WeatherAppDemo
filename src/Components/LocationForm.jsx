import React, { Component } from "react"
import PropTypes from "prop-types"

// The location search form, with a textbox and a button
export default class LocationForm extends Component {
  state = {
    location: this.props.defaultLocation,
    currentValue: this.props.defaultLocation
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    defaultLocation: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="location-search-form">
        <label htmlFor="locationSearch">Location:</label>
        <input
          id="locationSearch"
          type="text"
          value={this.state.currentValue}
          onChange={this._handleChange}
          onKeyPress={this._handleSubmit}
        />
        <button
          onClick={this._handleClick}
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

  _updateLocationToCurrentValue = () => {
    this.setState({ location: this.state.currentValue })
    this.props.onSubmit(this.state.currentValue)
  }

  // Update the state with the latest textbox value
  _handleChange = e => {
    this.setState({ currentValue: e.target.value })
  }

  // The user has hit the button to load a forecast
  _handleClick = e => {
    e.preventDefault()
    this._updateLocationToCurrentValue()
  }

  // Handle the user hitting enter/return after their search
  _handleSubmit = e => {
    if (e.key === "Enter") {
      this._updateLocationToCurrentValue()
    }
  }
}

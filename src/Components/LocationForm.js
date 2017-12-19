import React, { Component } from "react"
import PropTypes from "prop-types"

class LocationForm extends Component {
  constructor(props) {
    super(props)
    this.state = { location: this.props.defaultLocation, currentValue: this.props.defaultLocation }
  }

  handleChange = event => {
    this.setState({ currentValue: event.target.value })
  }

  handleClick = event => {
    event.preventDefault()
    this.setState({ location: this.state.currentValue })
    this.props.onSubmit(this.state.currentValue)
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
        />
        <button
          onClick={this.handleClick}
          disabled={this.state.currentValue === this.state.location}
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

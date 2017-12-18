import React, { Component } from "react"
import spinner from "../img/spinners/ripple.svg"

export default class LoadingSpinner extends Component {
  render() {
    return (
      <div className="loading-spinner">
        <img src={spinner} alt="Loading..." />
      </div>
    )
  }
}

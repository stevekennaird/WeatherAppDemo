import React from "react"
import spinner from "../img/spinners/ripple.svg"

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <img src={spinner} alt="Loading..." />
  </div>
)

export default LoadingSpinner

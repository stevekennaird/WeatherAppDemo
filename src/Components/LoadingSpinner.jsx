import React from "react"
import spinner from "../img/spinners/ripple.svg"

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <img src={spinner} alt="Loading..." />
    </div>
  )
}

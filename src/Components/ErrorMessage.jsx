import React from "react"
import PropTypes from "prop-types"

const ErrorMessage = props => {
  const detail = props.detail ? <em>{props.detail}</em> : null
  return (
    <div className="error-message">
      <strong>{props.summary}</strong>
      {detail}
    </div>
  )
}

ErrorMessage.propTypes = {
  summary: PropTypes.string.isRequired,
  detail: PropTypes.string
}

export default ErrorMessage

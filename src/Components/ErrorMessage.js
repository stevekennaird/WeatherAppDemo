import React from "react"
import PropTypes from "prop-types"

const ErrorMessage = props => {
  const detail = this.props.detail ? <em>{this.props.detail}</em> : null
  return (
    <div className="error-message">
      <strong>{this.props.summary}</strong>
      {detail}
    </div>
  )
}

ErrorMessage.propTypes = {
  summary: PropTypes.string.isRequired,
  detail: PropTypes.string
}

export default ErrorMessage

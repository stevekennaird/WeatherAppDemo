import React from "react"
import PropTypes from "prop-types"

ErrorMessage.propTypes = {
  summary: PropTypes.string.isRequired,
  detail: PropTypes.string
}

export default function ErrorMessage({ summary, detail }) {
  return (
    <div className="error-message">
      <strong>{summary}</strong>
      {detail && <em>{detail}</em>}
    </div>
  )
}

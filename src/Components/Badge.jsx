import React from "react"
import PropTypes from "prop-types"

// This is a Functional Stateless Component (see hacker-day-readme.md)
Badge.propTypes = {
  content: PropTypes.string.isRequired
}

export default function Badge({ content }) {
  return <span className="badge">{content}</span>
}

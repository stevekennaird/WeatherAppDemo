import React from "react"
import PropTypes from "prop-types"

// This is a Functional Stateless Component (see hacker-day-readme.md)
const Badge = props => <span className="badge">{props.content}</span>

Badge.propTypes = {
  content: PropTypes.string.isRequired
}

export default Badge

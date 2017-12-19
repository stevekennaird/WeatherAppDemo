import React, { Component } from "react"
import PropTypes from "prop-types"

class Badge extends Component {
  render() {
    return <span className="badge">{this.props.content}</span>
  }
}

Badge.propTypes = {
  content: PropTypes.string.isRequired
}

export default Badge

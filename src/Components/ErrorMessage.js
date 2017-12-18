import React, { Component } from "react"
import PropTypes from "prop-types"

class ErrorMessage extends Component {
  constructor(props) {
    super(props)
    this.state = { messageToDisplay: this.props.summary }
  }
  handleClick = () => {
    if (this.props.detail) {
      this.setState({
        messageToDisplay:
          this.state.messageToDisplay === this.props.summary
            ? this.props.detail
            : this.props.summary
      })
    }
  }
  render() {
    return (
      <div className="error-message" onClick={this.handleClick}>
        {this.state.messageToDisplay}
      </div>
    )
  }
}

ErrorMessage.propTypes = {
  summary: PropTypes.string.isRequired,
  detail: PropTypes.string
}

export default ErrorMessage

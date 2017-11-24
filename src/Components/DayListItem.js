import React, { Component } from 'react';

class DayListItem extends Component {

  render() {
    return (
      <h2>{this.props.dayOfWeek}</h2>
    )
  }
}

export default DayListItem
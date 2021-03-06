import React, { Component } from "react"
import logo from "./img/header/logo.png"
import "./css/App.css"
import DayNav from "./Components/DayNav"
import LocationForm from "./Components/LocationForm"

class App extends Component {
  constructor() {
    super()
    this.defaultLocation = "London"
    this.state = { location: this.defaultLocation }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Forecast App</h1>
        </header>
        <div>
          <LocationForm defaultLocation={this.defaultLocation} onSubmit={this._setLocation} />
          <DayNav location={this.state.location} />
        </div>
      </div>
    )
  }

  _setLocation = newLocation => {
    this.setState({ location: newLocation })
  }
}

export default App

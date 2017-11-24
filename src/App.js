import React, { Component } from "react";
import logo from "./img/header/logo.png";
import "./css/App.css";
import DayList from "./Components/DayList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather Forecast</h1>
        </header>
        <div>
          <DayList />
        </div>
      </div>
    );
  }
}

export default App;

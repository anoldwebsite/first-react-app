import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/* By using a class component instead of a function, we get access to state inside our class, whic is a js object with properties. */
class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "this text"
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button
            onClick={() => {
              this.state.string === "this text"
                ? this.setState({ string: "THAT TEXT" })
                : this.setState({ string: "this text" });
            }}
          >
            click me to change the text above dynamically
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React from Scratch
          </a>
        </header>
      </div>
    );
  }
}

export default App;

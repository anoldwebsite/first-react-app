import React, { Component } from "react";
import "./App.css";
import { CardList } from './components/card-list/card-list.component'

/* By using a class component instead of a function, we get access to state inside our class, whic is a js object with properties. */
class App extends Component {
  constructor() {
    super(); /* This line calls the constructor of React.Component, which is superclass of this class App. Here, in this class, we are extending the functionality of that superclass. */
    this.state = {
      monsters: []
    };
  }
  //The method componentDidMount below is a life cycle method which we have access to because our class extends the Component class.
  componentDidMount() {//This method is called immediately after component is mounted. Setting the state here will cause re-rendering.
    fetch('https://jsonplaceholder.typicode.com/users') //This returns a promise
      .then(response => response.json())  //This returns a promise
      .then(usersArray => this.setState({ monsters: usersArray }))//Setting the state, whic will cause re-rendering.
  }
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;

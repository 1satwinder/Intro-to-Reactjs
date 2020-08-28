import React, { Component } from "react";

// using class to create a component with a state.
class Subscribe extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome user!! click to subscribe",
    };
  }
  enter() {
    //always change the state using setState() method
    // render method is executed after the state changes.
    // changing state using object as argument.
    this.setState({ message: "Subscribed" });
  }

  render() {
    return (
      <div>
        <h1>This is a class component with state. which can be changed.</h1>
        <h2>{this.state.message}</h2>

        <button onClick={this.enter.bind(this)}>Subscribe</button>

        <hr></hr>
      </div>
    );
  }
}

export default Subscribe;

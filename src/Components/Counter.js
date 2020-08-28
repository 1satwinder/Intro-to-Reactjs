import React, { Component } from "react";

class Counter extends Component {
  state = { counter: 0 };

  increment = () => {
    // here we are using current state with this
    // this.setState({
    //     counter: this.state.counter+1
    //   } , () => console.log("Calback function counter: "+this.state.counter));

    // changing state using function as an argument if need to update based on previous state.
    // here we are using previous state.
    this.setState((previousState, props) => {
      return { counter: previousState.counter + 1 };
    });
    // this statement gets executed first before setState method.
    console.log(this.state.counter);
  };

  incrementFive = () => {
    console.log(this);
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };

  render() {
    return (
      <div>
        <p>Counter - {this.state.counter}</p>
        <button onClick={this.incrementFive}>Increment</button>
      </div>
    );
  }
}

export default Counter;

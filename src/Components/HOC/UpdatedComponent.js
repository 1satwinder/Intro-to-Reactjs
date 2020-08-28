import React, { Component } from "react";

const UpdatedComponent = (WrapperComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    increamentCount = () => {
      this.setState((previousState) => {
        return { count: previousState.count + 1 };
      });
    };
    render() {
      return (
        <WrapperComponent
          count={this.state.count}
          increamentCount={this.increamentCount}
          {...this.props}   // here we are passing remaining props to wrapper component.
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
